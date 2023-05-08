#!/usr/bin/env sh
###
 # @Author: onmyoji onmyoji@qq.com
 # @Date: 2023-03-21 16:10:50
 # @LastEditors: onmyoji onmyoji@qq.com
 # @LastEditTime: 2023-05-08 20:35:24
 # @FilePath: \nahida-cn\deploy.sh
 # @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd build

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
echo 'www.nahida.cn' >CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# https://github.com/galaxy2017/galaxy2017.GitHub.io.git
# git@github.com:galaxy2017/galaxy2017.GitHub.io.git

# git push -f git@github.com:galaxy2017/galaxy2017.GitHub.io.git main
# git push -f https://${access_token}@github.com/galaxy2017/galaxy2017.GitHub.io.git main


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@galaxy2017/galaxy2017.GitHub.io.git main:gh-pages
# git push -f https://${access_token}@https://github.com/galaxy2017/nahida-cn.git master:gh-pages
git push -f https://github.com/galaxy2017/nahida-cn.git master:gh-pages