const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..'),out=path.join(root,'dist');
if(!out.startsWith(root+path.sep)||path.basename(out)!=='dist')throw Error('Unsafe output directory');
if(fs.existsSync(out))fs.rmSync(out,{recursive:true,force:true});
fs.mkdirSync(out,{recursive:true});
for(const file of ['index.html','styles.css','app-extra.css','feedback.css','regional-audio.css','voice-ui.css','app.js','core.js','data.js','regional-audio.js','.nojekyll'])fs.copyFileSync(path.join(root,file),path.join(out,file));
fs.cpSync(path.join(root,'assets'),path.join(out,'assets'),{recursive:true});
const ctx={window:{}};vm.createContext(ctx);vm.runInContext(fs.readFileSync(path.join(root,'data.js'),'utf8'),ctx);
for(const question of ctx.window.GD_DATA.questions){const target=path.join(out,question.audio);fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(path.join(root,question.audio),target);}
const regional=path.join(root,'audio','regional');if(fs.existsSync(regional))fs.cpSync(regional,path.join(out,'audio','regional'),{recursive:true});
console.log(`GitHub Pages site ready: ${out}`);
