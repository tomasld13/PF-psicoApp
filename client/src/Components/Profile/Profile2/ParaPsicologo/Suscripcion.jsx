import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSaldoTotal } from "../../../../slice/psico/thunks"

export default function Suscripcion() {
  const { id } = useSelector(state => state.auth.authBack)
  const saldo = useSelector(state => state.psicology.saldoTotal)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSaldoTotal(id))
  },[dispatch])
  return (
    <>
        <div>
          <h1>Saldo a pagar: {saldo.saldo}</h1>
        </div>
    </>
  )

}