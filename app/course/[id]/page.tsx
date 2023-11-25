import React from 'react'

export default function page({params}:any) {
  return (
    <section>
      <h1>{params.id}</h1>
    </section>
  )
}
