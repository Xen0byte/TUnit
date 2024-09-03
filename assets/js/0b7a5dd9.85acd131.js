"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[1379],{773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(4848),a=n(8453);const i={sidebar_position:5},r="Data Source Driven Tests",o={id:"tutorial-basics/data-source-driven-tests",title:"Data Source Driven Tests",description:"A limitation of passing data in with [Arguments(...)] is that the data must be constant values. For example, we can't new up an object and pass it into this attribute as an argument. This is a constraint of the language and we can't change that.",source:"@site/docs/tutorial-basics/data-source-driven-tests.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/data-source-driven-tests",permalink:"/TUnit/docs/tutorial-basics/data-source-driven-tests",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Data Driven Tests",permalink:"/TUnit/docs/tutorial-basics/data-driven-tests"},next:{title:"Matrix Tests",permalink:"/TUnit/docs/tutorial-basics/matrix-tests"}},d={},l=[{value:"MethodDataSource",id:"methoddatasource",level:2},{value:"EnumerableMethodDataSource",id:"enumerablemethoddatasource",level:2},{value:"ClassDataSource",id:"classdatasource",level:2},{value:"Shared = SharedType.None",id:"shared--sharedtypenone",level:3},{value:"Shared = SharedType.Globally",id:"shared--sharedtypeglobally",level:3},{value:"Shared = SharedType.ForClass",id:"shared--sharedtypeforclass",level:3},{value:"Shared = SharedType.Keyed",id:"shared--sharedtypekeyed",level:3}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"data-source-driven-tests",children:"Data Source Driven Tests"})}),"\n",(0,s.jsxs)(t.p,{children:["A limitation of passing data in with ",(0,s.jsx)(t.code,{children:"[Arguments(...)]"})," is that the data must be ",(0,s.jsx)(t.code,{children:"constant"})," values. For example, we can't new up an object and pass it into this attribute as an argument. This is a constraint of the language and we can't change that."]}),"\n",(0,s.jsx)(t.p,{children:"If we want test data represented in the form of objects, or just to use something that isn't a constant, we can declare a test data source."}),"\n",(0,s.jsx)(t.p,{children:"This can come in 3 forms, with help of the following attributes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"[MethodDataSource]"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"[EnumerableMethodDataSource]"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"[ClassDataSource]"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"methoddatasource",children:"MethodDataSource"}),"\n",(0,s.jsx)(t.p,{children:"This has two options:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If you pass in one argument, this is the method name containing your data. TUnit will assume this is in the current test class."}),"\n",(0,s.jsxs)(t.li,{children:["If you pass in two arguments, the first should be the ",(0,s.jsx)(t.code,{children:"Type"})," of the class containing your test source data method, and the second should be the name of the method."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Here's an example returning a simple object:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",children:"using TUnit.Assertions;\nusing TUnit.Assertions.Extensions;\nusing TUnit.Core;\n\nnamespace MyTestProject;\n\npublic record AdditionTestData(int Value1, int Value2, int ExpectedResult);\n\npublic static class MyTestDataSources\n{\n    public static AdditionTestData AdditionTestData()\n    {\n        return new AdditionTestData(1, 2, 3);\n    }\n}\n\npublic class MyTestClass\n{\n    [Test]\n    [MethodDataSource(typeof(MyTestDataSources), nameof(MyTestDataSources.AdditionTestData))]\n    public async Task MyTest(AdditionTestData additionTestData)\n    {\n        var result = Add(additionTestData.Value1, additionTestData.Value2);\n\n        await Assert.That(result).Is.EqualTo(additionTestData.ExpectedResult);\n    }\n\n    private int Add(int x, int y)\n    {\n        return x + y;\n    }\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"This can also accept tuples if you don't want to create lots of new types within your test assembly:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",children:"using TUnit.Assertions;\nusing TUnit.Assertions.Extensions;\nusing TUnit.Core;\n\nnamespace MyTestProject;\n\npublic static class MyTestDataSources\n{\n    public static (int, int, int) AdditionTestData()\n    {\n        return (1, 2, 3);\n    }\n}\n\npublic class MyTestClass\n{\n    [Test]\n    [MethodDataSource(typeof(MyTestDataSources), nameof(MyTestDataSources.AdditionTestData))]\n    public async Task MyTest(int value1, int value2, int expectedResult)\n    {\n        var result = Add(value1, value2);\n\n        await Assert.That(result).Is.EqualTo(expectedResult);\n    }\n\n    private int Add(int x, int y)\n    {\n        return x + y;\n    }\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"enumerablemethoddatasource",children:"EnumerableMethodDataSource"}),"\n",(0,s.jsxs)(t.p,{children:["This works largely the same as ",(0,s.jsx)(t.code,{children:"MethodDataSource"}),", except that your method is expected to return an ",(0,s.jsx)(t.code,{children:"IEnumerable<>"})," of data. For each item returned, a new test will be created with that item passed in to the parameters."]}),"\n",(0,s.jsx)(t.p,{children:"Here's an example where the test would be invoked 3 times:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",children:"using TUnit.Assertions;\nusing TUnit.Assertions.Extensions;\nusing TUnit.Core;\n\nnamespace MyTestProject;\n\npublic record AdditionTestData(int Value1, int Value2, int ExpectedResult);\n\npublic static class MyTestDataSources\n{\n    public static IEnumerable<AdditionTestData> AdditionTestData()\n    {\n        yield return new AdditionTestData(1, 2, 3);\n        yield return new AdditionTestData(2, 2, 4);\n        yield return new AdditionTestData(5, 5, 10);\n    }\n}\n\npublic class MyTestClass\n{\n    [Test]\n    [EnumerableMethodDataSource(typeof(MyTestDataSources), nameof(MyTestDataSources.AdditionTestData))]\n    public async Task MyTest(AdditionTestData additionTestData)\n    {\n        var result = Add(additionTestData.Value1, additionTestData.Value2);\n\n        await Assert.That(result).Is.EqualTo(additionTestData.ExpectedResult);\n    }\n\n    private int Add(int x, int y)\n    {\n        return x + y;\n    }\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"This can also accept tuples if you don't want to create lots of new types within your test assembly:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",children:"using TUnit.Assertions;\nusing TUnit.Assertions.Extensions;\nusing TUnit.Core;\n\nnamespace MyTestProject;\n\npublic static class MyTestDataSources\n{\n    public static IEnumerable<(int, int, int)> AdditionTestData()\n    {\n        yield return (1, 2, 3);\n        yield return (2, 2, 4);\n        yield return (5, 5, 10);\n    }\n}\n\npublic class MyTestClass\n{\n    [Test]\n    [EnumerableMethodDataSource(typeof(MyTestDataSources), nameof(MyTestDataSources.AdditionTestData))]\n    public async Task MyTest(int value1, int value2, int expectedResult)\n    {\n        var result = Add(value1, value2);\n\n        await Assert.That(result).Is.EqualTo(expectedResult);\n    }\n\n    private int Add(int x, int y)\n    {\n        return x + y;\n    }\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"classdatasource",children:"ClassDataSource"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ClassDataSource"})," attribute is used to instantiate and inject in new classes as parameters to your tests and/or test classes."]}),"\n",(0,s.jsx)(t.p,{children:"The attribute takes a generic type argument, which is the type of data you want to inject into your test."}),"\n",(0,s.jsxs)(t.p,{children:["It also takes an optional ",(0,s.jsx)(t.code,{children:"Shared"})," argument, controlling whether you want to share the instance among other tests.\nThis could be useful for times where it's very intensive to spin up lots of objects, and you instead want to share that same instance across many tests."]}),"\n",(0,s.jsx)(t.p,{children:"Ideally don't manipulate the state of this object within your tests if your object is shared. Because of concurrency, it's impossible to know which test will run in which order, and so your tests could become flaky and undeterministic."}),"\n",(0,s.jsx)(t.p,{children:"Options are:"}),"\n",(0,s.jsx)(t.h3,{id:"shared--sharedtypenone",children:"Shared = SharedType.None"}),"\n",(0,s.jsx)(t.p,{children:"The instance is not shared ever. A new one will be created for you."}),"\n",(0,s.jsx)(t.h3,{id:"shared--sharedtypeglobally",children:"Shared = SharedType.Globally"}),"\n",(0,s.jsx)(t.p,{children:"The instance is shared globally for every test that also uses this setting, meaning it'll always be the same instance."}),"\n",(0,s.jsx)(t.h3,{id:"shared--sharedtypeforclass",children:"Shared = SharedType.ForClass"}),"\n",(0,s.jsx)(t.p,{children:"The instance is shared for every test in the same class as itself, that also has this setting."}),"\n",(0,s.jsx)(t.h3,{id:"shared--sharedtypekeyed",children:"Shared = SharedType.Keyed"}),"\n",(0,s.jsxs)(t.p,{children:["When using this, you must also populate the ",(0,s.jsx)(t.code,{children:"Key"})," argument on the attribute."]}),"\n",(0,s.jsx)(t.p,{children:"The instance is shared for every test that also has this setting, and also uses the same key."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",children:"public class MyTestClass\n{\n    [Test]\n    [ClassDataSource<SomeClass>(Shared = SharedType.Globally)]\n    public void MyTest(SomeClass value)\n    {\n    }\n\n    public record SomeClass\n    {\n        // Some properties!\n    }\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);