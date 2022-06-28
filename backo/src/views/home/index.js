import React from 'react'
import {Link } from "react-router-dom";
import {CustomButton} from '../../components/button/'
export const HomeScreen = () => <container>
  <section>
    <span>
      Soy la pagina Home <br />
       <Link to="/test">Home</Link>
       <CustomButton text='Hola!!!' />
    </span>
  </section>
</container>