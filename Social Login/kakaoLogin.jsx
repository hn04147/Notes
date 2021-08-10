import React, { useState, useEffect } from "react"

// 카카오 로그인
// Kakao Login


const KakaoLogin = (props) => {
  const { kakao } = window


  // sdk 헤더에 추가
  useEffect(() => {
    const kakaoScript = document.createElement("script")
    kakaoScript.src = "https://developers.kakao.com/sdk/js/kakao.js"
    kakaoScript.type = "text/javascript"
    document.head.appendChild(kakaoScript)
  }, [])


  const kakaoLoginClickHandler = () => {
    const kakaoReset = document.createElement("script")
    kakaoReset.innerHTML = `Kakao.init("8f1fd57e5d09b254da3e9930789af629")`  //클라이언트 키
    document.head.appendChild(kakaoReset)

    window.Kakao.Auth.login({
      success: function (authObj) {
        console.log(authObj)
        const kakaoAccessToken = authObj.access_token
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: function (response) {
            const kakaoEmail = response.kakao_account.email
            const kakaoId = response.id
            console.log(
              `KakaoId: ${kakaoId}\nEmail: ${kakaoEmail}\nAccess Token: ${kakaoAccessToken}`
            )

            // 로그인 성공시 실행 할 것들
            //
            //
          },
          fail: function (error) {
            console.log(error)
          },
        })
      },
      fail: function (err) {
        console.log(err)
      },
    })
  }


  return (
    <>
      <img
        className="btn kakao"
        src={kakao}
        style={{
          width: `${WidthToDP(192)}px`,
          height: `${WidthToDP(32)}px`,
          cursor: "pointer",
        }}
        onClick={kakaoLoginClickHandler}
      />
    </>
  )
}