<br />

* [1. 맥에서 분할 압축 푸는 방법](1.-맥에서-분할-압축-푸는-방법)  
* [2. Mac 터미널(iterm2) 커스텀](2.-Mac-터미널(iterm2)-커스텀)  
* [3. Ssh로 remote server 접속 시, terminal 색깔 입히기](3.-Ssh로-remote-server-접속-시,-terminal-색깔-입히기)  

<br />

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

<br />

# 3. Ssh로 remote server 접속 시, terminal 색깔 입히기
* ```~/.bashrc``` 에 아래 코드를 추가해준다.
```
# >>> enable color support of terminal directory >>>
export PS1="\[\e]0;\u@\h \w\a\]${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\] \[\033[01;34m\]\w #\[\033[00m\] "
# <<< enable color support of terminal directory <<<


# >>> enable color support of ls and also add handy aliases >>>
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    #alias dir='dir --color=auto'
    #alias vdir='vdir --color=auto'

    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi
# <<< enable color support of ls and also add handy aliases <<<
```
* 이후 ```source ~/.bashrc``` 를 실행하여 적용시켜준다.
