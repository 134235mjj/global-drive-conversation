const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..'),out=path.join(root,'deliverables'),release=path.join(out,'交流互动台-v1.0');
fs.mkdirSync(release,{recursive:true});
for(const file of ['index.html','styles.css','app-extra.css','feedback.css','regional-audio.css','app.js','core.js','data.js','regional-audio.js','recording-studio.html','recording-studio.js','README.md','REGIONAL_AUDIO_GUIDE.md','INTEGRATION.md','VALIDATION.md','.nojekyll','preview-server.cjs','generate-audio.ps1','audio-scripts.json'])fs.copyFileSync(path.join(root,file),path.join(release,file));
for(const dir of ['assets','scripts','tests','.github'])fs.cpSync(path.join(root,dir),path.join(release,dir),{recursive:true});
const ctx={window:{}};vm.createContext(ctx);vm.runInContext(fs.readFileSync(path.join(root,'data.js'),'utf8'),ctx);
fs.mkdirSync(path.join(release,'audio'),{recursive:true});
for(const q of ctx.window.GD_DATA.questions)fs.copyFileSync(path.join(root,q.audio),path.join(release,q.audio));
const regionalDir=path.join(root,'audio','regional');if(fs.existsSync(regionalDir))fs.cpSync(regionalDir,path.join(release,'audio','regional'),{recursive:true});
const manifest=[];
function walk(folder){for(const item of fs.readdirSync(folder,{withFileTypes:true})){const full=path.join(folder,item.name);if(item.isDirectory())walk(full);else if(item.name!=='manifest.json')manifest.push({file:path.relative(release,full).replaceAll('\\','/'),bytes:fs.statSync(full).size});}}
walk(release);fs.writeFileSync(path.join(release,'manifest.json'),JSON.stringify(manifest,null,2));console.log(`${manifest.length} files, ${(manifest.reduce((n,f)=>n+f.bytes,0)/1024/1024).toFixed(1)} MB. ${release}`);
