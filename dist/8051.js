"use strict";(self.webpackChunkwebpacktemplate=self.webpackChunkwebpacktemplate||[]).push([[8051],{8051:function(e,t,a){a.r(t);var s=a(3745);t.default=s.memo((e=>{const{setPageData:t,exportPageContext:a,validateForm:o,useInitState:r,httpRequest:c,setCookies:l,toggleChangeTheme:n,navigateTo:g,$root:u}=e.pageBuilderContext,[i,p]=s.useState("Init state");r({dynamicProps:!0}),s.useMemo((()=>"mlem mlem"),[i]),s.useEffect((()=>{const e=`Test cookie ${i}`;l("testCookie",e),logger.log(`Set testCookie: ${e}`)}),[i]),s.useEffect((()=>{logger.log(`Test Effect ${i}`)}),[i]);const m=s.useCallback((async()=>{try{const e=await c("http://localhost:3000/products/0156f421-d727-41c7-b60e-50c3e3b82613");t({apiData:JSON.stringify(e?.data||{})})}catch(e){t({apiData:e.message})}}),[t]),d=s.useCallback((()=>{n()}),[n]),b=s.useCallback((()=>{t({abcd:Date.now(),"text-error":!u["text-error"],dynamicColor:u["text-error"]?"skyblue":"purple",nest:{nest1:"nest1 data"},dynamicProps:!u.dynamicProps})}),[t,u["text-error"],u.dynamicProps]),k=s.useCallback((()=>{p(`${Date.now()}`),t({test:Date.now()})}),[p,t]),C=s.useCallback((e=>{g(e)}),[g]),f=s.useCallback((()=>{g("home_page/123abcd?queryParams=brucebui",{passedData:"data-from-test_page"})}),[g]),T=s.useCallback((()=>{g("permission_page")}),[g]),h=s.useCallback((()=>{g("home_page",{passedData:u.test})}),[g,u.test]);return s.useEffect((()=>{a({changeTheme:d,updatePageState:b,testFunction:k,goTo:C,goFieldTestPage:f,getTestingData:m,goToPermissionTestPage:T,goToHomePage:h,dataFromExportPageContext:"CONTANST OR SOMETHING"})}),[a,d,b,k,C,f,m,T,h]),s.createElement(s.Fragment,null)}))}}]);