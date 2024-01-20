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
    const updatedArray = value.split("-");
    setArr(updatedArray);
  }, [value]); 

  const [expense, setExpense] = React.useState<number | string >('')
  const [expenseName, setExpenseName] = React.useState<string>("")
  const [expenseArray, setExpenseArray] = React.useState<any>([]);
  const [expenseSum, setExpenseSum] = React.useState<number | null>(null)

  const updateArray = () => {
    if(expenseName.length < 1){
      return
    }
    if(expense === null){
      return
    }
    console.log("Expense Name:", expenseName);
    console.log("Expense Amount:", expense);
    // Update the array with the new expense name and amount
    setExpenseArray([...expenseArray, { name: expenseName, amount: Number(expense) }]);
    // Clear input fields
    setExpenseName('');
    setExpense('');
  };

  const deleteItem = (index: any) => {
    const updatedArray = [...expenseArray];
    updatedArray.splice(index, 1);
    setExpenseArray(updatedArray);
  };

  React.useEffect(() => {
    var temp: number = 0
    for (let i = 0; i < expenseArray.length; i++) {
      temp = temp + expenseArray[i].amount
    }
    setExpenseSum(temp)
  }, [expenseArray]); 


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
            placeholder="$4000"
            className="flex h-9 max-w-24 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            onChange={handleIncomeChange}
            min="0"
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
            <CardContent>
              <div className="flex flex-col gap-4">
                <Label htmlFor="terms">Item</Label>
                <input 
                  value={expenseName}
                  placeholder="Rent, Gas, Food, etc..."
                  onChange={(e: any) => setExpenseName(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Label htmlFor="terms">Cost</Label>
                <input
                  type="number"
                  placeholder="200$" 
                  value={expense}
                  onChange={(e: any) => setExpense(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="button" onClick={updateArray} >
                  Add
                </Button>                
              </div>
            </CardContent>
            <CardContent className="flex flex-row gap-4">
              <p>Expense:</p>
              <p>Amount:</p>
            </CardContent>
            <CardContent>
            <ul>
              {expenseArray.map((item: any, index: any) => (
                <li className="flex flex-row space-between" key={index}>
                  <div >
                    {item.name}:  ${item.amount}                    
                  </div>
                  <Button className="ml-2 bg-red-500 hover:bg-red-600" onClick={() => deleteItem(index)} type="button">Delete</Button>
                </li>
              ))}
            </ul>
            </CardContent>
            <CardFooter>
              <p>Total: {expenseSum}</p>
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
            <CardFooter>
              <p>Total: </p>
            </CardFooter>
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
