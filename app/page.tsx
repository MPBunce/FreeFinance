'use client';
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
  return (
    <main>
      <section className="flex flex-col gap-8 border-b border-border/40">
      <Card>

        <CardHeader>
          <CardTitle className="text-center text-2xl">About</CardTitle>
        </CardHeader>

        <CardContent className="text-center">
          <p>Free Finance leverages Next 13 and Shadcs UI to offer a powerful suite of financial tools. Users benefit from an Interest Calculator, Basic Budgeting Information, and Monthly Spending Analysis. </p>
        </CardContent>
        <CardContent className="text-center">
          <p>The platform's intuitive design simplifies budget management and empowers users to make informed financial decisions. By uploading monthly bank statements as Excel sheets, users unlock in-depth spending insights.</p>
        </CardContent>
        <CardContent className="text-center">
          <p>This open-source project encourages collaboration, contribute to the project via our GitHub link below and support us through PayPal, contributing to the evolution of financial tools for everyone.</p>
        </CardContent>

        <CardFooter className="flex justify-center gap-8">

              <li className="text-primary ml-4 py-4 flex flex-row hover:text-primary">

                <Link className="flex flex-row" href="https://github.com/MPBunce/FreeFinance">
                  Github<ArrowTopRightIcon/>              
                </Link>


              </li>
              <li className="text-primary ml-4 py-4 flex flex-row hover:text-primary">

                <Link className="flex flex-row" href="https://paypal.me/MPBunce?country.x=CA&locale.x=en_US">
                  PayPal<ArrowTopRightIcon/>
                </Link>

              </li>

        </CardFooter>

      </Card>

      </section>
    </main>
  )
}
