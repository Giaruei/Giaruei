# Less Music

## 仓库地址

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/PacificD/less-music.git)



## 开发者

- [@DZR](https://github.com/DZR-Github)
- [@Giaruei](https://github.com/Giaruei)
- [@Ride-pig](https://github.com/Ride-pig)
- [@PacificD](https://www.github.com/PacificD)



## 后端

> 因为react app默认跑在3000端口，避免后端与react app端口冲突，统一将后端的端口修改成4000

- [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi.git)

- [API文档](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi)



## 技术栈/库

- react / typescript
- [chakraUI](https://chakra-ui.com/)：组件/UI
- [Framer-Motion](https://www.framer.com/motion/)：motion动效
- [react-icons](https://react-icons.github.io/react-icons/)：图标
- [ahooks](https://ahooks.js.org/zh-CN/hooks/use-request/index)：自定义hooks
- [lottie-react](https://lottiereact.com/)：lottie动画
  - [lottie-files](https://lottiefiles.com/featured)：动画素材
- [react-router-dom v6](https://reactrouter.com/docs/en/v6)：路由
- [embla-carousel](https://www.embla-carousel.com/)：轮播图



## 需求：

- hooks尽量使用 [ahooks](https://ahooks.js.org/zh-CN/hooks/use-request/index)，再考虑自己封装
- loading过渡
- 骨架屏
- 虚拟列表
- react-carousel
- 数据缓存
- 夜间模式
- 鉴权



## commit规范

- Git 提交的粒度要尽量小，比如每完成一个功能或修复一个bug尽量都进行提交

- `git commit`的`message`格式如下：

  - **\<type>(\<scope>): \<subject>**、

  - scope指影响范围，具体到包即可

  - subject指具体修改内容

  - `type`包括：

    ```
    feat:  新功能
    
    fix:  修改bug
    
    refactor:  代码重构
    
    docs:  文档变更
    
    style:  代码格式修改, 不影响代码含义的更改（空格、格式、缺少分号等），注意不是 css 修改
    
    test:  测试用例修改
    
    chore:  其他修改, 比如构建流程, 依赖管理或辅助工具和库的更改，例如文档生成
    
    pref:  优化性能
    
    build:  对项目构建或者依赖的改动
    
    ci:  CI 的修改
    
    revert:  evert 前一个 commit
    
    merge：合并分支
    ```

- 因为配置了`commitlint`和`cz`，所以以后只需要执行命令`cz`并按照其指定的规范就可以。



## 项目搭建

> 为方便以后同学了解搭建团队项目的过程，记录一次项目构建的流程。

### 创建项目

- `npx creat-react-app`或`npx create-next-app@latest`或者是使用`vite`创建项目等。

#### 配置路径别名：

`npm i -D react-app-rewired customize-cra`

可以将`react-app`隐藏起的webpack配置重新暴露出来，但是不推荐。使用`customize-cra`来覆盖配置。

在根目录下创建`config-overrides.js`:

```javascript
const { override, addWebpackAlias } = require("customize-cra")
const path = require("path")
module.exports = override(
    addWebpackAlias({
        "@": path.resolve("./src")
    })
)
```

在`tsconfig.json`中添加：

```json
"baseUrl": "src",
"paths": {
 	"@/*": [
		"*"
	]
}
```

#### 项目文件结构：

```
- public 资源文件（img、svg等）
- src
	- pages 视图
		- home home页面模块
        	- index.tsx
			- index.css
			- 私有子组件文件夹
    	- login login页面模块
    - components 公共组件模块
    	- index.ts 导出所有组件
    - routers 路由文件
    - store 状态管理
    - utils 工具函数（文件以.util结尾）
		-scroll.util.ts
	- hooks 自定义hooks
		- useModal.ts
	- styles 样式文件
    - service api请求（文件以.api结尾）
		- login.api.ts
	- constans 常量（const 变量名大写）
	- types ts类型文件
```

多文件用一个`index.ts`来统一管理，导出成员



### 路由：

#### react-router-dom

- hooks



### 网络请求：

#### axios



### 代码规范：

#### Eslint

安装`devDependencies`：

```SHELL
npm i -D eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

初始化`.eslintrc.js`：

```SHELL
eslint --init
// 或者
npm init @eslint/config
```

选择 problems -> esm -> react -> typescript -> browser，生成JSON配置文件。

配置`.eslintrc.json`：

```json
{
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "react-app",
        "react-app/jest",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "react-hooks",
        "prettier",
        "@typescript-eslint"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        // 0-禁用，1-warn，2-error
        "semi": [
            2,
            "never"
        ], // 行末分号
        "quotes": [
            2,
            "double"
        ], //双引号
        "no-console": 0, // 禁用 console
    }
}
```

之后编写rules。

但是发现一个问题：在编写根路径下的`.js`文件时，发现`eslint`规则不适用与这些js文件，报错如下：

```
Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
The file does not match your project config: config-overrides.js.
The file must be included in at least one of the projects provided.
```

解决方法，在`.eslintrc.json`中，给parserOptions指定文件类型：

```JSON
"overrides": [
        {
            "files": [
                "*.ts",
                "*.tsx"
            ],
            "parserOptions": {
                "ecmaFeatures": {
                    "jsx": true
                },
                "ecmaVersion": "latest",
                "sourceType": "module",
                "project": [
                    "./tsconfig.json"
                ]
            }
        }
    ],
```



#### prettier

安装`devDependencies`：

```SHELL
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

此时回去修改eslint配置，在extends扩展中加入：

`"plugin:prettier/recommended"`

此外，在plugins中加入`prettier`

创建`.prettierrc.js`文件，写入配置：

```js
module.export = {
  printWidth: 80,
  tabWidth: 4,
  useTabs: false, // 使用空格代替tab缩进
  singleQuote: false, // 使用单引号
  jsxSingleQuote: false,
  semi: false, // 分号
  trailingComma: "none", // 对面末尾加分号，<es5|none|all>
  bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
  jsxBracketSameLine: false, // 多属性html标签的‘>’折行放置
  arrowParens: "avoid", // 箭头函数单参数时省略括号
  endOfLine: "auto",
};
```

注意，使用.js后缀的prettierrc文件无法被正确识别，改成.json文件格式才能正确被识别！

#### tsconfig

配置tsconfig.json



### 团队协作：

#### git

##### commitizen使用

> [commitizen](https://github.com/commitizen/cz-cli) 是一个 cli 工具，用于规范化 git commit 信息，可以代替 git commit，建议全局安装。

```SHELL
npm install -g commitizen
commitizen init cz-conventional-changelog --save-dev --save-exact
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

之后就可以直接使用`git cz`命令来代替commit。

项目配合`husky`和`commitlint`做message校验

```SHELL
npm i -D husky commitlint 
```

在项目根目录下新增一个`.commitlintrc.js`文件，内容如下：

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional']
};
```

添加`.husky/commit-msg`文件，执行下面命令可自动添加：

```SHELL
npx husky install
npx husky add .husky/commit-msg "npx --no-install commitlint --edit "$1""
```

安装`@commitlint/config-conventional`

```SHELL
npm i -D @commitlint/config-conventional cz-customizable
```

之后尝试进行不规范的commit：

![](http://img.pacificd.cn/Snipaste_2022-07-13_17-20-05.png)

可选：自定义提示信息并显示为中文：

在根目录添加`.cz-config.js `文件，用于自定义提示信息。修改`package.json`：

```json
"config": {
        "commitizen": {
            "path": "node_modules/cz-customizable"
        }
    }
}
```

##### 自动生成changelog

```shell
npm i -D standard-version
```

在`package.json`添加如下配置：

```shell
{
  "scripts": {
    "release": "standard-version"
  }
}
```

在项目的根目录下添加配置文件 `.versionrc`

##### husky与lint-staged

> 在git提交代码时，通过prettier来优化代码。在代码提交之前，进行代码规则检查能够确保进入git库的代码都是符合代码规则的。

- husky：一个方便用来处理 `pre-commit` 、 `pre-push` 等 githooks 的工具
- lint-staged：对 git 暂存区的代码，运行 linters 的工具

```SHELL
npm i lint-staged -D
npx husky add .husky/pre-commit "npm run lint" # 创建husky的pre-commit钩子
```

在`package.json`中添加配置：

```JSON
{
    "scripts": {
        "lint": "lint-staged --allow-empty",
    },
    "lint-staged": {
        "src/**/*.{js,jsx,ts,tsx}": [
            "prettier --write",
            "eslint --fix"
        ]
    },
}
```

之后执行`cz`来commit的时候就会自动检测代码和格式化：

![](http://img.pacificd.cn/Snipaste_2022-07-13_17-59-35.png)

#### Merge Request

#### codeReview

### CI/CD：

#### webhook + docker
