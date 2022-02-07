import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        <Filho {...props}><strong>Jefferson</strong></Filho>
        <Filho sobrenome={props.sobrenome}>Jasmine</Filho>
        <Filho sobrenome="Leal">kiara</Filho>
        <Filho sobrenome="Leal">lydia</Filho>
        
    </div>