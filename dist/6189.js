"use strict";(self.webpackChunkwebpacktemplate=self.webpackChunkwebpacktemplate||[]).push([[6189],{9091:function(e,t){const n=React.memo((e=>{const t=React.Children.map(e.children,(e=>React.isValidElement(e)?React.cloneElement(e):e));return React.createElement(React.Fragment,null,t)}));t.Z=n},6189:function(e,t,n){n.r(t);var a=n(3745),c=n(9091);t.default=a.memo((e=>{const{$root:t,setPageData:n,useInitState:o,exportPageContext:i}=e.pageBuilderContext;o({selectedItemId:1,navItems:[{id:1,title:"Dashboard",icon:"view-dashboard-outline",notifCount:5},{id:2,title:"Orders",icon:"package-variant-closed"},{id:3,title:"Customers",icon:"account-supervisor-outline",notifCount:10},{id:4,title:"Inventory",icon:"warehouse",notifCount:1},{id:5,title:"Reports",icon:"file-chart-outline"},{id:6,title:"Settings",icon:"cog-outline"}]});const s=usePrevious(t.selectedItemId),l=a.useCallback((e=>{n({selectedItemId:e})}),[]);return a.useEffect((()=>{if(t.selectedItemId===s)return;t.props?.onChangePage(t.selectedItemId);const e=t.navItems.map((e=>({...e,selected:e.id===t.selectedItemId})));n({navItems:e})}),[t.navItems,s,t.selectedItemId]),i({onItemClick:l}),a.createElement(c.Z,{...e})}))}}]);