import React, { useState, useEffect } from "react"
import GoogleLogin from "react-google-login"

// 구글 로그인
// GOOGLE LOGIN

const GoogleClientId = "google_client_id"

const GoogleLogin = (props) => {

  // function when login is successed
  const onSuccess = async (response) => {
    const {
      googleId,
      profileObj: { email, name },
    } = response
    const accessToken = response.accessToken
    console.log(
      `GoogleId: ${googleId}\nEmail: ${email}\nAccess Token: ${accessToken}`
    )
    // 성공시 실행할 것들 아래 작성
    //
  }

  // function when Login is failed
  const onFailure = (error) => {
    console.log(error)
    //
  }


  return (
    <>
      <GoogleLogin
        id="googleIdLogin"
        style={{ display: "none" }}
        clientId={GooGleclientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
        buttonText="구글 간편 로그인"
        render={(renderProps) => (
          // 버튼 꾸미기
          <LoginBtn
            style={{ cursor: "pointer" }}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          />
        )}
      />
    </>
  )
}
