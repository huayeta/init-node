const path=require('path');
const Koa=require('koa');
const app=new Koa();
const views=require('koa-views');
const serve=require('koa-static');
const router=require('koa-router')();

app.use(views(path.resolve(__dirname,'../views/'),{
    map:{
        htm:'swig'
    },
    extension:'htm'
}))

app.use(serve('../public/'));

router.get('/',async (ctx,next)=>{
    await ctx.render('index');
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(8989,function(){
    console.log('listening 8989');
})
