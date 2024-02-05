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

  //Expenses Array
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


  //spendings Array
  const [spending, setSpending] = React.useState<number | string >('')
  const [spendingName, setSpendingName] = React.useState<string>("")
  const [spendingArray, setSpendingArray] = React.useState<any>([]);
  const [spendingSum, setSpendingSum] = React.useState<number | null>(null)

  const updateSpending = () => {
    if(spendingName.length < 1){
      return
    }
    if(spending === null){
      return
    }
    console.log("spending Name:", spendingName);
    console.log("spending Amount:", spending);
    // Update the array with the new spending name and amount
    setSpendingArray([...spendingArray, { name: spendingName, amount: Number(spending) }]);
    // Clear input fields
    setSpendingName('');
    setSpending('');
  };

  const deleteSpending = (index: any) => {
    const updatedArray = [...spendingArray];
    updatedArray.splice(index, 1);
    setSpendingArray(updatedArray);
  };

  React.useEffect(() => {
    var temp: number = 0
    for (let i = 0; i < spendingArray.length; i++) {
      temp = temp + spendingArray[i].amount
    }
    setSpendingSum(temp)
  }, [spendingArray]); 

  //savings Array
  const [saving, setSaving] = React.useState<number | string >('')
  const [savingName, setSavingName] = React.useState<string>("")
  const [savingArray, setSavingArray] = React.useState<any>([]);
  const [savingSum, setSavingSum] = React.useState<number | null>(null)

  const updateSaving = () => {
    if(savingName.length < 1){
      return
    }
    if(saving === null){
      return
    }
    console.log("saving Name:", savingName);
    console.log("saving Amount:", saving);
    // Update the array with the new saving name and amount
    setSavingArray([...savingArray, { name: savingName, amount: Number(saving) }]);
    // Clear input fields
    setSavingName('');
    setSaving('');
  };

  const deleteSaving = (index: any) => {
    const updatedArray = [...savingArray];
    updatedArray.splice(index, 1);
    setSavingArray(updatedArray);
  };

  React.useEffect(() => {
    var temp: number = 0
    for (let i = 0; i < savingArray.length; i++) {
      temp = temp + savingArray[i].amount
    }
    setSavingSum(temp)
  }, [savingArray]); 


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
                  placeholder="500$" 
                  value={expense}
                  onChange={(e: any) => setExpense(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="button" onClick={updateArray} >
                  Add
                </Button>                
              </div>
            </CardContent>
            <CardContent>
            <ul>
              {expenseArray.map((item: any, index: any) => (
                <li className="my-2 flex justify-between" key={index}>
                  <div className="">
                    {item.name}:  ${item.amount}                    
                  </div>
                  <Button className="ml-2 bg-red-500 hover:bg-red-600" onClick={() => deleteItem(index)} type="button">Delete</Button>
                </li>
              ))}
            </ul>
            </CardContent>
            <CardFooter>
              <p>Total: ${expenseSum}</p>
            </CardFooter>
          </Card>

        </div>

        <div>

          <Card>
            <CardHeader>
              {arr[0] ? (
                <CardTitle>Spending - {arr[1]}%</CardTitle>
              ) : (
                <CardTitle>Spending</CardTitle>
              )}
              {arr[0] && income ? (
                <CardDescription>Spending Budget: {(arr[1] * income )/100}$</CardDescription>
              ) : (
                <CardDescription>Spending Budget</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <Label htmlFor="terms">Item</Label>
                <input 
                  value={spendingName}
                  placeholder="Netflix, Gym, Dinner Out, etc..."
                  onChange={(e: any) => setSpendingName(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Label htmlFor="terms">Cost</Label>
                <input
                  type="number"
                  placeholder="200$" 
                  value={spending}
                  onChange={(e: any) => setSpending(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="button" onClick={updateSpending} >
                  Add
                </Button>                
              </div>
            </CardContent>
            <CardContent>
            <ul>
              {spendingArray.map((item: any, index: any) => (
                <li className="my-2 flex justify-between" key={index}>
                  <div className="">
                    {item.name}:  ${item.amount}                    
                  </div>
                  <Button className="ml-2 bg-red-500 hover:bg-red-600" onClick={() => deleteSpending(index)} type="button">Delete</Button>
                </li>
              ))}
            </ul>
            </CardContent>
            <CardFooter>
              <p>Total: ${spendingSum}</p>
            </CardFooter>
          </Card>

        </div>

        <div>

          <Card>
            <CardHeader>
              {arr[0] ? (
                <CardTitle>Savings - {arr[2]}%</CardTitle>
              ) : (
                <CardTitle>Savings</CardTitle>
              )}
              {arr[0] && income ? (
                <CardDescription>Savings Budget: {(arr[2] * income )/100}$</CardDescription>
              ) : (
                <CardDescription>Savings Budget</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <Label htmlFor="terms">Item</Label>
                <input 
                  value={savingName}
                  placeholder="Investing, Saving, etc..."
                  onChange={(e: any) => setSavingName(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Label htmlFor="terms">Cost</Label>
                <input
                  type="number"
                  placeholder="200$" 
                  value={saving}
                  onChange={(e: any) => setSaving(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="button" onClick={updateSaving} >
                  Add
                </Button>                
              </div>
            </CardContent>
            <CardContent>
            <ul>
              {savingArray.map((item: any, index: any) => (
                <li className="my-2 flex justify-between" key={index}>
                  <div className="">
                    {item.name}:  ${item.amount}                    
                  </div>
                  <Button className="ml-2 bg-red-500 hover:bg-red-600" onClick={() => deleteSaving(index)} type="button">Delete</Button>
                </li>
              ))}
            </ul>
            </CardContent>
            <CardFooter>
              <p>Total: ${savingSum}</p>
            </CardFooter>
          </Card>

        </div>

      </div>

      {/* <div className="m-8 flex flex-row justify-center">
        <Button className="">
          Download As Excel
        </Button>
      </div> */}

    </main>
  )
}
