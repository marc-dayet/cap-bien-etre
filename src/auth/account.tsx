import React, {FC} from "react"
import useBehaviorSubject from "react-captain/behavior-subject"

import firebase from "./firebase"
import {auth$} from "./context"
import iconName from "./name.icon.svg"
import iconLogout from "./logout.icon.svg"

import cs from "./account.module.scss"

type AccountProps = {}

const Account: FC<AccountProps> = () => {
  const [auth] = useBehaviorSubject(auth$)

  return (
    <div className={cs.grid}>
      <div className={cs.header}>MA SESSION</div>
      <img className={cs.icon} src={iconName} alt="" />
      <span>{auth.type === "authenticated" && auth.name}</span>
      <img className={cs.icon} src={iconLogout} alt="" />
      <button className={cs.signOut} onClick={() => firebase.signOut()}>
        Quitter
      </button>
    </div>
  )
}

export default Account
