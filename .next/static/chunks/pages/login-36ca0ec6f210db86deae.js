(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{1162:function(e,r,s){"use strict";s.r(r);var a=s(5893),n=s(6807),i=s(1664),d=s(7294),t=s(3609),o=s(9851),l=s(4978),c=s(7885);r.default=function(){var e=(0,d.useState)(!1);e[0],e[1];return(0,a.jsx)(o.Z,{sticky:!0,textCenter:!0,footerBg:!0,container:!0,children:(0,a.jsxs)("main",{children:[(0,a.jsx)(l.Z,{active:"Login",pageHeading:"Login"}),(0,a.jsx)("section",{className:"login-area pt-100 pb-100",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-8 offset-lg-2",children:(0,a.jsxs)("div",{className:"basic-login",children:[(0,a.jsx)("h3",{className:"text-center mb-60",children:"Login From Here"}),(0,a.jsx)(n.J9,{initialValues:c.dm.initialValue,validationSchema:c.dm.schema,onSubmit:function(e,r){var s=r.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),s(!1)}),400)},children:function(e){var r=e.values,s=e.errors,n=e.handleChange,d=e.handleBlur,o=e.handleSubmit,l=e.isSubmitting;return(0,a.jsxs)("form",{onSubmit:o,children:[(0,a.jsx)(t.Z,{label:"Phone Number",id:"phone",name:"phone",type:"number",placeholder:"Enter Your Phone Number...",values:r.phone,errors:s.phone,handleBlur:d,handleChange:n}),(0,a.jsx)(t.Z,{label:"Password",id:"password",name:"password",type:"password",placeholder:"Enter password...",values:r.password,errors:s.password,handleBlur:d,handleChange:n}),(0,a.jsx)("button",{disabled:l,className:"btn theme-btn-2 w-100",children:"Login Now"}),(0,a.jsx)("div",{className:"or-divide",children:(0,a.jsx)("span",{children:"or"})}),(0,a.jsx)(i.default,{href:"/register",children:(0,a.jsx)("a",{className:"btn theme-btn w-100",children:"Register Now"})})]})}})]})})})})})]})})}},3609:function(e,r,s){"use strict";var a=s(5893),n=s(7294);r.Z=function(e){var r=e.label,s=e.handleChange,i=e.handleBlur,d=e.values,t=e.errors,o=e.placeholder,l=e.id,c=e.type,u=e.name;return(0,a.jsxs)(n.Fragment,{children:[(0,a.jsxs)("label",{htmlFor:l,children:[r," ",(0,a.jsx)("span",{className:"required",children:"*"})]}),(0,a.jsx)("input",{id:l,type:c||"text",name:u,onChange:s,onBlur:i,value:d,placeholder:o,className:"mb-0"}),(0,a.jsx)("div",{id:"val-username1-error",className:"invalid-feedback animated fadeInUp mb-3",style:{display:"block"},children:t&&t})]})}},4978:function(e,r,s){"use strict";var a=s(5893),n=s(1664),i=s(7294),d=s(9164);r.Z=function(e){var r=e.pageHeading,s=e.active,t=e.thankupage,o=e.id;return(0,i.useEffect)((function(){(0,d.CC)()}),[]),(0,a.jsx)("section",{className:"breadcrumb-area","data-background":"/img/bg/page-title.png",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-xl-12",children:(0,a.jsxs)("div",{className:"breadcrumb-text text-center",children:[t&&(0,a.jsx)("i",{className:"fa fa-check-circle text-success fs-100 mb-3","aria-hidden":"true"}),(0,a.jsx)("h1",{className:t?"mb-2":"",children:r}),t&&(0,a.jsxs)("p",{className:"fs-20",children:["Payment is successfully processsed and your order is on the way ",(0,a.jsx)("br",{})," Transaction ID:",o]}),(0,a.jsxs)("ul",{className:"breadcrumb-menu",children:[(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/",children:(0,a.jsx)("a",{children:"home"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:s})})]})]})})})})})}},7885:function(e,r,s){"use strict";s.d(r,{dm:function(){return E},$h:function(){return R},ll:function(){return S}});var a,n,i=s(2809),d=s(9501),t=d.Z_().min(3,"Your username must consist of at least 3 characters ").max(50,"Your username must consist of less than 50 characters ").required("Please enter a username"),o=d.Z_().min(6,"Your password must be at least 6 characters long").max(50,"Your password must be less than characters long").required("Please provide a password"),l=(d.Z_().min(6,"Your password must be at least 6 characters long").max(50,"Your password must be less than characters long").required("Please provide a password"),d.Z_().email().required("Please provide your email")),c=d.O7().oneOf([!0],"You must accept the terms and conditions"),u=d.Z_().required("Please provide your country name"),h=d.Z_().required("Please provide your first name"),m=d.Z_().required("Please provide your company name"),p=d.Z_().required("Please provide your address"),Z=d.Z_().required("Please provide your city"),f=d.Z_().required("Please provide your state"),v=d.Z_().required("Please provide your zip"),y=d.Rx().required("Please provide your phone"),x=d.O7(),b=d.Z_().when("defferentAddress",{is:!0,then:d.Z_().required("Please provide your country name")}),w=d.Z_().when("defferentAddress",{is:!0,then:d.Z_().required("Please provide your frist name")}),_=d.Z_().when("defferentAddress",{is:!0,then:d.Z_().required("Please provide your company name")}),N=d.Z_().when("defferentAddress",{is:!0,then:d.Z_().required("Please provide your address")}),j=d.Z_().when("defferentAddress",{is:!0,then:d.Z_().required("Please provide your city")}),g=d.Z_().when("defferentAddress",{is:!0,then:d.Z_().required("Please provide your seate name")}),P=d.Z_().when("defferentAddress",{is:!0,then:d.Z_().required("Please provide your zip code")}),q=d.Rx().when("defferentAddress",{is:!0,then:d.Rx().required("Please provide your number")}),A=d.Z_().email().when("defferentAddress",{is:!0,then:d.Z_().email().required("Please provide your email")}),k=d.O7(),C=d.Z_().when("createAccount",{is:!0,then:d.Z_().min(5,"Your password must be at least 5 characters long").max(50,"Your password must be at least 5 characters long").required("Please provide a password")}),Y=d.Z_().required("Please provide your coupon code"),E={schema:d.Ry().shape({email:l,password:o,tandc:c}),initialValue:{email:"",password:"",tandc:!1}},R=(d.Ry().shape({username:t,password:o,email:l}),{schema:d.Ry().shape((a={country:u,fName:h,address:p,state:f},(0,i.Z)(a,"country",u),(0,i.Z)(a,"cName",m),(0,i.Z)(a,"email",l),(0,i.Z)(a,"city",Z),(0,i.Z)(a,"zip",v),(0,i.Z)(a,"phone",y),(0,i.Z)(a,"country2",b),(0,i.Z)(a,"fName2",w),(0,i.Z)(a,"address2",N),(0,i.Z)(a,"state2",g),(0,i.Z)(a,"country2",b),(0,i.Z)(a,"cName2",_),(0,i.Z)(a,"city2",j),(0,i.Z)(a,"zip2",P),(0,i.Z)(a,"phone2",q),(0,i.Z)(a,"email2",A),(0,i.Z)(a,"defferentAddress",x),(0,i.Z)(a,"createAccount",k),(0,i.Z)(a,"password2",C),a)),initialValue:(n={country:"",fName:"",lName:"",address:"",state:""},(0,i.Z)(n,"country",""),(0,i.Z)(n,"cName",""),(0,i.Z)(n,"city",""),(0,i.Z)(n,"zip",""),(0,i.Z)(n,"phone",""),(0,i.Z)(n,"country2",""),(0,i.Z)(n,"fName2",""),(0,i.Z)(n,"lName2",""),(0,i.Z)(n,"address2",""),(0,i.Z)(n,"state2",""),(0,i.Z)(n,"country2",""),(0,i.Z)(n,"cName2",""),(0,i.Z)(n,"city2",""),(0,i.Z)(n,"zip2",""),(0,i.Z)(n,"phone2",""),(0,i.Z)(n,"email",""),(0,i.Z)(n,"email2",""),(0,i.Z)(n,"defferentAddress",!1),(0,i.Z)(n,"createAccount",!1),n)}),S={schema:d.Ry().shape({coupon:Y}),initialValue:{coupon:""}}},7156:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return s(1162)}])}},function(e){e.O(0,[640,606,851,774,888,179],(function(){return r=7156,e(e.s=r);var r}));var r=e.O();_N_E=r}]);