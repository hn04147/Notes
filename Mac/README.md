<br />

1. [맥에서 분할 압축 푸는 방법](#1-맥에서-분할-압축-푸는-방법)  
2. [Mac 터미널 iterm2 커스텀](#2-Mac-터미널-iterm2-커스텀)  
3. [Ssh로 remote server 접속 시 terminal 색깔 입히기](#3-Ssh로-remote-server-접속-시-terminal-색깔-입히기)  
4. [Ssh 비밀번호로 접속 설정하기](#4-Ssh-비밀번호로-접속-설정하기)
5. [Ssh로 remote server 접속 시 alias 기본으로 설정 하기](#5-Ssh로-remote-server-접속-시-alias-기본으로-설정-하기)
6. [Ssh로 remote server 접속 시 ```.bashrc``` 기본으로 실행하기](#6-Ssh로-remote-server-접속-시-```.bashrc```-기본으로-실행하기)

<br />

# 1. 맥에서 분할 압축 푸는 방법

1. ```zip -FF 분할압축된원본파일명.zip --out 한개로압축될파일명.zip```  
2. ```unzip -qt 한개로압축될파일명.zip```  

> EX) 파일명이 ```data.zip```, ```data.z01```, ```data.z02``` 이렇게 되어있을 때  
> 1. ```zip -FF data.zip --out data_concat.zip``` 으로 압축 파일 합치기
> 2. ```unzip -qt data_concat.zip``` 으로 합친 파일 압축 풀기 

<br />

# 2. Mac 터미널 iterm2 커스텀

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

# 3. Ssh로 remote server 접속 시 terminal 색깔 입히기
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

<br />

# 4. Ssh 비밀번호로 접속 설정하기

1. root 권한으로 ```passwd root``` 를 입력하여 ```Enter new UNIX passwd``` 와 ```Retype new UNIX passwd``` 에 동일한 비밀번호를 입력한다.
2. root 권한으로 ```vim /etc/ssh/sshd_config``` 를 입력하여 ```/etc/ssh/sshd_config``` 파일을 열어서 ```PasswordAuthentication yes``` 로 변경을 해준다.
3. 마지막으로 root 권한으로 ```service ssh restart```를 하여 ssh 재부팅을 시켜준다.
4. 이후 ```ssh root@<your ip> -p <your port>```로 접속을 하면 설정한 비밀번호를 입력하여 접속할 수 있다.

<br />

# 5. Ssh로 remote server 접속 시 alias 기본으로 설정 하기
* ```~/.bash_aliases``` 에 ```alias`를 적용할 코드를 작성해준다.
```
alias ll='ls -al'
```
* ```~/.bashrc``` 에 아래 코드를 추가해준다.
```
# >>> enable '.bash_aliases' >>>
if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi
# <<< enable '.bash_aliases' <<<<
```

# 6. Ssh로 remote server 접속 시 ```.bashrc``` 기본으로 실행하기
* ```~/.bash_profile``` 파일을 생성하고 아래 코드를 추가한다.
```
if [ -f ~/.bashrc ]; then 
  . ~/.bashrc 
cd ~
fi
```
