import React from 'react'

import InputOne from './InputOne';
import InputTwo from './InputTwo';
import InputThree from './InputThree';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Form (page: Number) {

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <InputOne />;
      case 1:
        return <InputTwo />;
       case 2:
         return <InputThree />;
       default:
         return <InputOne />;
    }
}; 

return (
    <>
      <Card>
        {conditionalComponent()}
      </Card>
    </>
  )
}