'use client';


import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react";



export default function Home() {

  const [prince, setPrince] = useState()
  const [rate, setRate] = useState()
  const [time, setTime] = useState()
  const [total, setTotal] = useState(0)

  const calc = () => {
    const n = 1
    if (prince !== undefined && rate !== undefined && time !== undefined && n !== undefined) {
      const res = prince * Math.pow(1 + rate / (n * 100), n * time);
      setTotal(res);
    } else {
      console.error("Invalid input: 'prince', 'rate', 'time', or 'n' is undefined.");
    }
  }
  
  

  return (
    <main>
          <Card>
            <CardHeader>

            Compound Intrest Calculator

            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">

                <Label htmlFor="terms">Principle Amount</Label>
                <input        
                  onChange={(e: any) => setPrince(e.target.value)}  
                  placeholder="$100,000"     
                  type="number"
                  min="0"         
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />

                <Label htmlFor="terms">Annual Rate</Label>
                <input    
                  onChange={(e: any) => setRate(e.target.value)}      
                  placeholder="8%"     
                  type="number"
                  min="0"         
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />

                <Label htmlFor="terms">Time</Label>
                <input    
                  onChange={(e: any) => setTime(e.target.value)}         
                  placeholder="10 Years"     
                  type="number"
                  min="0"         
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />

                <Button type="button" onClick={ () => calc() } >
                  Crunch the numbers compoundly yearly 
                </Button>                
              </div>
            </CardContent>

            { total != 0 ?              
              <CardFooter>
                <div>{total}</div>
              </CardFooter> 
              :
              <CardFooter>
                <div></div>
              </CardFooter>
            }


          </Card>
    </main>
  )
}
