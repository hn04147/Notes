# 1. 맥에서 분할 압축 푸는 방법

1. ```zip -FF 분할압축된원본파일명.zip --out 한개로압축될파일명.zip```  
2. ```unzip -qt 한개로압축될파일명.zip```  

> EX) 파일명이 ```data.zip```, ```data.z01```, ```data.z02``` 이렇게 되어있을 때  
> 1. ```zip -FF data.zip --out data_concat.zip``` 으로 압축 파일 합치기
> 2. ```unzip -qt data_concat.zip``` 으로 합친 파일 압축 풀기 

<br />

# 2. Mac 터미널(iterm2) 커스텀

### oh-my-zsh 삭제
>이전에 터미널을 커스텀 한 적이 있어 Oh My Zsh가 이미 깔려있는 상황이라면 아래 코드로 터미널 초기화를 시켜준다.
```javascript
rm -rf ~/.oh-my-zsh
rm ~/.zshrc
cp ~/.zshrc.pre-oh-my-szh ~/.zshrc
source ~/.zshrc
```

### 아나콘다 zsh에서 사용하는 방법
> .zshrc에 들어가서 환경변수 설정
> 아래 코드들을 제일 밑에 추가해주자
```
vi ~/.zshrc      // .zshrc 편집
                 // 아래 코드 추가 


export PATH=$HOME/bin:/usr/local/bin:/anaconda3:/anaconda3/bin:$PATH

# >>> conda initialize >>>
 # !! Contents within this block are managed by 'conda init' !!
 __conda_setup="$('/Users/Sangjin/opt/anaconda3/bin/conda' 'shell.zsh' 'hook'     2> /dev/null)"
 if [ $? -eq 0 ]; then
     eval "$__conda_setup"
 else
     if [ -f "/Users/Sangjin/opt/anaconda3/etc/profile.d/conda.sh" ]; then
         . "/Users/Sangjin/opt/anaconda3/etc/profile.d/conda.sh"
     else
         export PATH="/Users/Sangjin/opt/anaconda3/bin:$PATH"
     fi
 fi
 unset __conda_setup
 # <<< conda initialize <<<
```
