## Mac 터미널 커스텀
<br/>

### oh-my-zsh 삭제
>이전에 터미널을 커스텀 한 적이 있어 Oh My Zsh가 이미 깔려있는 상황이라면 아래 코드로 터미널 초기화를 시켜준다.
```javascript
rm -rf ~/.oh-my-zsh
rm ~/.zshrc
cp ~/.zshrc.pre-oh-my-szh ~/.zshrc
source ~/.zshrc
```
