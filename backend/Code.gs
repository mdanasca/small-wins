// Paste into a script BOUND to a new Google Sheet. Deploy as a Web App:
// Run setup() once in the editor before deploying. Execute as: Me. Who has access: Anyone. Use the /exec URL on both phones.
// This is intentionally open to anyone who has the deployment URL.
function output_(body){return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);}
function setup(){const book=SpreadsheetApp.getActiveSpreadsheet();if(!book)throw Error('Open this script from your Google Sheet.');PropertiesService.getScriptProperties().setProperty('SHEET_ID',book.getId());sheet_();}
function sheet_(){const id=PropertiesService.getScriptProperties().getProperty('SHEET_ID');if(!id)throw Error('Run setup in the editor first.');const book=SpreadsheetApp.openById(id);return book.getSheetByName('Small Wins Data')||book.insertSheet('Small Wins Data');}
function read_(sheet){const rows=sheet.getDataRange().getValues();const revision=Number(rows[0][0])||0;const body=rows.slice(1).map(r=>r[0]||'').join('');return {revision:revision,state:body?JSON.parse(body):null};}
function valid_(s){return s&&s.version===1&&Array.isArray(s.people)&&s.people.length===2&&s.people.every(p=>typeof p==='string'&&p.length<=40)&&s.weeks&&typeof s.weeks==='object'&&Array.isArray(s.routines)&&Array.isArray(s.goals)&&Array.isArray(s.activity);}
function doGet(){const lock=LockService.getScriptLock();if(!lock.tryLock(10000))return output_({error:'Storage busy. Try again.',status:503});try{return output_(read_(sheet_()));}catch(e){return output_({error:'Could not read household storage.',status:500});}finally{lock.releaseLock();}}
function doPost(e){
 const lock=LockService.getScriptLock();if(!lock.tryLock(10000))return output_({error:'Storage busy. Try again.',status:503});
 try{
  const raw=e&&e.postData&&e.postData.contents;if(!raw||raw.length>2000000)return output_({error:'Invalid payload size.',status:400});
  let p;try{p=JSON.parse(raw);}catch(error){return output_({error:'Invalid JSON.',status:400});}
  if(!Number.isSafeInteger(p.revision)||p.revision<0||!valid_(p.state))return output_({error:'Invalid plan.',status:400});
  const sheet=sheet_(),current=read_(sheet);if(current.revision!==p.revision)return output_({error:'Plan changed. Reload and retry.',status:409});
  const body=JSON.stringify(p.state),chunks=body.match(/[\s\S]{1,40000}/g)||[];
  // Prefix apostrophe forces text, even if a chunk begins with '='. Reads omit it.
  const rows=[[current.revision+1]].concat(chunks.map(c=>["'"+c]));
  const count=Math.max(rows.length,sheet.getLastRow());while(rows.length<count)rows.push(['']);
  if(sheet.getMaxRows()<count)sheet.insertRowsAfter(sheet.getMaxRows(),count-sheet.getMaxRows());
  sheet.getRange(1,1,count,1).setValues(rows);SpreadsheetApp.flush();
  return output_({revision:current.revision+1});
 }catch(error){return output_({error:'Could not save household storage.',status:500});}finally{lock.releaseLock();}
}
