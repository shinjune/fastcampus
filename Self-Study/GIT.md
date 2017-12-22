# source code management

git add filename
git add foldername/.
git commit -m "message"
git status
git push origin master


echo "# exp1" >> readme.md
git init
echo ..
git add reademe.md
git commit -m "first comment"
remote add origin https://github.com/shinjune/exp1
git push -u origin master


### git에 저장하는 방법
1. https 통해서 id/passowrd 입력

2. SSH method
ssh-keygen
enter passphrase : 안해도 된다 그냥 enter
cd ~/.ssh   (~/. 는 홈폴더로 이동의미)
ls
id_rsa   id_rsa.pub  2개 파일 있으면 제대로 setting

git의 setting 가서 ssh and gpg keys 클릭

new ssh key 하고

git bash 에서 cat id_rsa.pub

나온 값을 ssh key에 입력

control ~ 은 터미널 열기 (git에서)

해당 폴더 가서(마지막 폴더) npm -i



### netlify
aws처럼 git에 있는 소스를 갖고 와서 서버로

build command
  npm run build
public directory
   dist