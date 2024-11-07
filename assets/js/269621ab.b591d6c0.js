"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[768],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),h=a,d=p["".concat(c,".").concat(h)]||p[h]||m[h]||o;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=h;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),a=t(6010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>T});var r=t(7462),a=t(7294),o=t(6010),l=t(2466),i=t(6550),c=t(1980),s=t(7392),u=t(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=m(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,s]=d({queryString:t,groupId:r}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),y=(()=>{const e=c??p;return h({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var y=t(2389);const g="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:n,block:t,selectedValue:i,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const n=e.currentTarget,t=u.indexOf(n),r=s[t].value;r!==i&&(p(n),c(r))},h=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>u.push(e),onKeyDown:h,onClick:m},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":i===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function z(e){const n=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(b,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function T(e){const n=(0,y.Z)();return a.createElement(z,(0,r.Z)({key:String(n)},e))}},9890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905)),o=t(4866),l=t(5162);const i={},c="Chezmoi",s={unversionedId:"extras/util/chezmoi",id:"extras/util/chezmoi",title:"Chezmoi",description:"You can enable the extra with the :LazyExtras command.",source:"@site/docs/extras/util/chezmoi.md",sourceDirName:"extras/util",slug:"/extras/util/chezmoi",permalink:"/extras/util/chezmoi",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/main/docs/extras/util/chezmoi.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Treesitter-context",permalink:"/extras/ui/treesitter-context"},next:{title:"Dot Files",permalink:"/extras/util/dot"}},u={},p=[{value:"chezmoi.vim",id:"chezmoivim",level:2},{value:"chezmoi.nvim",id:"chezmoinvim",level:2},{value:"mini.icons",id:"miniicons",level:2},{value:"dashboard-nvim <em>(optional)</em>",id:"dashboard-nvim-optional",level:2}],m={toc:p};function h(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chezmoi"},(0,a.kt)("inlineCode",{parentName:"h1"},"Chezmoi")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can enable the extra with the ",(0,a.kt)("inlineCode",{parentName:"p"},":LazyExtras")," command.\nPlugins marked as optional will only be configured if they are installed.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Alternatively, you can add it to your ",(0,a.kt)("code",null,"lazy.nvim")," imports"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.util.chezmoi" },\n    { import = "plugins" },\n  },\n})\n'))),(0,a.kt)("p",null,"Below you can find a list of included plugins and their default settings."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You don't need to copy the default settings to your config.\nThey are only shown here for reference.")),(0,a.kt)("h2",{id:"chezmoivim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/alker0/chezmoi.vim"},"chezmoi.vim")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,a.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  -- highlighting for chezmoi files template files\n  "alker0/chezmoi.vim",\n  init = function()\n    vim.g["chezmoi#use_tmp_buffer"] = 1\n    vim.g["chezmoi#source_dir_path"] = os.getenv("HOME") .. "/.local/share/chezmoi"\n  end,\n}\n')))),(0,a.kt)("h2",{id:"chezmoinvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/xvzc/chezmoi.nvim"},"chezmoi.nvim")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  edit = {\n    watch = false,\n    force = false,\n  },\n  notification = {\n    on_open = true,\n    on_apply = true,\n    on_watch = false,\n  },\n  telescope = {\n    select = { "<CR>" },\n  },\n}\n'))),(0,a.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "xvzc/chezmoi.nvim",\n  keys = {\n    {\n      "<leader>sz",\n      pick_chezmoi,\n      desc = "Chezmoi",\n    },\n  },\n  opts = {\n    edit = {\n      watch = false,\n      force = false,\n    },\n    notification = {\n      on_open = true,\n      on_apply = true,\n      on_watch = false,\n    },\n    telescope = {\n      select = { "<CR>" },\n    },\n  },\n  init = function()\n    -- run chezmoi edit on file enter\n    vim.api.nvim_create_autocmd({ "BufRead", "BufNewFile" }, {\n      pattern = { os.getenv("HOME") .. "/.local/share/chezmoi/*" },\n      callback = function()\n        vim.schedule(require("chezmoi.commands.__edit").watch)\n      end,\n    })\n  end,\n}\n')))),(0,a.kt)("h2",{id:"miniicons"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.icons"},"mini.icons")),(0,a.kt)("p",null," Filetype icons"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  file = {\n    [".chezmoiignore"] = { glyph = "\ue615", hl = "MiniIconsGrey" },\n    [".chezmoiremove"] = { glyph = "\ue615", hl = "MiniIconsGrey" },\n    [".chezmoiroot"] = { glyph = "\ue615", hl = "MiniIconsGrey" },\n    [".chezmoiversion"] = { glyph = "\ue615", hl = "MiniIconsGrey" },\n    ["bash.tmpl"] = { glyph = "\uebca", hl = "MiniIconsGrey" },\n    ["json.tmpl"] = { glyph = "\ue60b", hl = "MiniIconsGrey" },\n    ["ps1.tmpl"] = { glyph = "\udb82\ude0a", hl = "MiniIconsGrey" },\n    ["sh.tmpl"] = { glyph = "\ue691", hl = "MiniIconsGrey" },\n    ["toml.tmpl"] = { glyph = "\ue6b2", hl = "MiniIconsGrey" },\n    ["yaml.tmpl"] = { glyph = "\ue6a8", hl = "MiniIconsGrey" },\n    ["zsh.tmpl"] = { glyph = "\uebca", hl = "MiniIconsGrey" },\n  },\n}\n'))),(0,a.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.icons",\n  opts = {\n    file = {\n      [".chezmoiignore"] = { glyph = "\ue615", hl = "MiniIconsGrey" },\n      [".chezmoiremove"] = { glyph = "\ue615", hl = "MiniIconsGrey" },\n      [".chezmoiroot"] = { glyph = "\ue615", hl = "MiniIconsGrey" },\n      [".chezmoiversion"] = { glyph = "\ue615", hl = "MiniIconsGrey" },\n      ["bash.tmpl"] = { glyph = "\uebca", hl = "MiniIconsGrey" },\n      ["json.tmpl"] = { glyph = "\ue60b", hl = "MiniIconsGrey" },\n      ["ps1.tmpl"] = { glyph = "\udb82\ude0a", hl = "MiniIconsGrey" },\n      ["sh.tmpl"] = { glyph = "\ue691", hl = "MiniIconsGrey" },\n      ["toml.tmpl"] = { glyph = "\ue6b2", hl = "MiniIconsGrey" },\n      ["yaml.tmpl"] = { glyph = "\ue6a8", hl = "MiniIconsGrey" },\n      ["zsh.tmpl"] = { glyph = "\uebca", hl = "MiniIconsGrey" },\n    },\n  },\n}\n')))),(0,a.kt)("h2",{id:"dashboard-nvim-optional"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/nvimdev/dashboard-nvim"},"dashboard-nvim")," ",(0,a.kt)("em",{parentName:"h2"},"(optional)")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  local projects = {\n    action = pick_chezmoi,\n    desc = "  Config",\n    icon = "\ueaf8",\n    key = "c",\n  }\n\n  projects.desc = projects.desc .. string.rep(" ", 43 - #projects.desc)\n  projects.key_format = "  %s"\n\n  -- remove lazyvim config property\n  for i = #opts.config.center, 1, -1 do\n    if opts.config.center[i].key == "c" then\n      table.remove(opts.config.center, i)\n    end\n  end\n\n  table.insert(opts.config.center, 5, projects)\nend\n'))),(0,a.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvimdev/dashboard-nvim",\n  optional = true,\n  opts = function(_, opts)\n    local projects = {\n      action = pick_chezmoi,\n      desc = "  Config",\n      icon = "\ueaf8",\n      key = "c",\n    }\n\n    projects.desc = projects.desc .. string.rep(" ", 43 - #projects.desc)\n    projects.key_format = "  %s"\n\n    -- remove lazyvim config property\n    for i = #opts.config.center, 1, -1 do\n      if opts.config.center[i].key == "c" then\n        table.remove(opts.config.center, i)\n      end\n    end\n\n    table.insert(opts.config.center, 5, projects)\n  end,\n}\n')))))}h.isMDXComponent=!0}}]);