'use client';

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
const frameworks = [
  {
    value: "70-20-10",
    label: "70-20-10",
  },
  {
    value: "60-30-10",
    label: "60-30-10",
  },
  {
    value: "50-30-20",
    label: "50-30-20",
  },
  {
    value: "40-10-50",
    label: "40-10-50",
  },
  {
    value: "30-10-60",
    label: "30-10-60",
  },
]

export default function Home() {

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [arr, setArr] = React.useState<any>([""])
  const [income, setIncome] = React.useState()

  const handleIncomeChange = (e: any) => {
    setIncome(e.target.value);
  };

  React.useEffect(() => {
    // Update your array based on the watchedValue
    // You can perform any logic you need here
    const updatedArray = value.split("-");
    // Update the state of yourArray
    setArr(updatedArray);

  }, [value]); 



  return (
    <main>
      <Card className="justify-center mb-4 rounded-xl">
        <CardHeader>
          <CardTitle className="text-center">Budget Structure</CardTitle>
          <CardDescription className="text-center">
            Below there are five budget stuctures which represent how you portion your gross monthly income. The first number represents necessary expenses, things like rent, heat, hydro and groiceries. The Second represents guilt free spendings, things like streaming service subscriptions, gym memberships, eating out, and any other wants. The final number represents money allocated towards saving and investments. In the second input box beside it enter your gross monthly income.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row gap-4 justify-center">

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
              >
                {value
                  ? frameworks.find((framework) => framework.value === value)?.label
                  : "Select Budget Plan"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Select Budget Plan" />
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === framework.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {framework.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <input
            type="number"
            className="flex h-9 w-[350] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            onChange={handleIncomeChange}
          />
        </CardContent>
      </Card>

      <div className="flex flex-col lg:flex-row gap-4 justify-center">
        <div>

          <Card>
            <CardHeader>
              {arr[0] ? (
                <CardTitle>Expenses - {arr[0]}%</CardTitle>
              ) : (
                <CardTitle>Expenses</CardTitle>
              )}
              {arr[0] && income ? (
                <CardDescription>Expenses Budget: {(arr[0] * income )/100}$</CardDescription>
              ) : (
                <CardDescription>Expenses Budget</CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex flex-row">
              <Input/>
              <Button className="">
                Add
              </Button>
            </CardContent>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>

        </div>
        <div>

          <Card>
            <CardHeader>
              {arr[1] ? (
                <CardTitle>Spending - {arr[1]}%</CardTitle>
              ) : (
                <CardTitle>Spending</CardTitle>
              )}
              {arr[1] && income ? (
                <CardDescription>Spending Budget: {(arr[1] * income )/100}$</CardDescription>
              ) : (
                <CardDescription>Spending Budget</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-2">
                <Label htmlFor="terms">Item</Label>
                <Input placeholder="Item"/>
                <Label htmlFor="terms">Cost</Label>
                <Input placeholder="200$"/>
                <Button className="">
                  Add
                </Button>                
              </form>
            </CardContent>
            <CardContent className="flex flex-row gap-4">
              <p>Card Content</p>
              <p>Card Content</p>
            </CardContent>
          </Card>

        </div>
        <div>

          <Card>
            <CardHeader>
              {arr[2] ? (
                <CardTitle>Savings & Investing - {arr[2]}%</CardTitle>
              ) : (
                <CardTitle>Savings & Investing</CardTitle>
              )}
              {arr[1] && income ? (
                <CardDescription>Savings & Investing Budget: {(arr[2] * income )/100}$</CardDescription>
              ) : (
                <CardDescription>Savings & Investing Budget</CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex flex-row">
              <Input/>
              <Button className="">
                Add
              </Button>
            </CardContent>
            <CardContent className="flex flex-row gap-8">
              <p>Card Content</p>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Total: </p>
            </CardFooter>
          </Card>

        </div>
      </div>

      <div className="m-8 flex flex-row justify-center">
        <Button className="">
          Download As Excel
        </Button>
      </div>
    </main>
  )
}
