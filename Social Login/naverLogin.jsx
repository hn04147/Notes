import React, { useState, useEffect } from "react"


// 네이버 로그인
// Naver Login

const NaverLogin = (props) => {
  const { naver } = window

  useEffect(() => {
    //sdk 헤더에 추가
    const naverScript = document.createElement("script")
    naverScript.src =
      "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
    naverScript.type = "text/javascript"
    document.head.appendChild(naverScript)

    naverScript.onload = () => {
      const naverLogin = new window.naver.LoginWithNaverId({
        clientId: "CLIENT_ID",                                  //클라이언트 아이디
        callbackUrl: "CALLBACK_URL",                            //Callback URL
        callbackHandle: true,
        isPopup: false,
        loginButton: {
          color: "green",
          type: 3,
          height: 40,
        },
      })

      naverLogin.init()
      naverLogin.logout()
      naverLogin.getLoginStatus((status) => {
        if (status) {
          console.log("Naver 로그인 상태", naverLogin.user)
          const naverId = naverLogin.user.id
          const naverEmail = naverLogin.user.email
          const token = naverLogin.accessToken.accessToken
          console.log(
            `Naver Id: ${naverId}\nEmail: ${naverEmail}\nToken: ${token}`
          )

          const { id, email } = naverLogin.user
          if (email == undefined || id == undefined) {
            naverLogin.reprompt()
            return
          }
        } else {
          console.log("Naver 비 로그인 상태")
        }
      })
    }
  }, [])


  return (
    <>
      {/* 네이버에서 제공해주는 버튼 */}
      <div id="naverIdLogin" />




      {/* 커스텀 버튼 쓰고싶을 때 */}
      <div id="naverIdLogin" style={{ display: "none" }} />
      <img
        src={"Image Source"}
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          document.getElementById("naverIdLogin").firstElementChild.click()
        }}
      />
    </>
  )
}