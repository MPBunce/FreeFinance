'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DoubleArrowUpIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main>
      <section className="flex flex-row gap-8 justify-center">
      <Card className="justify-center mb-4 rounded-xl">
        <CardHeader>
          <CardTitle className="text-center">Upload Excel Files</CardTitle>
          <CardDescription className="text-center">
            Please upload relavant credit and debit statements for the month.
          </CardDescription>
        </CardHeader>
        <CardContent className="justify-center gap-2">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Checking Account Statements</Label>
                <Input id="debit" type="file" multiple/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Credit Card Statements</Label>
                <Input id="credit" type="file" multiple/>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      </section>
    </main>
  )
}
