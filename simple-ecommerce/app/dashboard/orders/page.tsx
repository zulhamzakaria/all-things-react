import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function OrdersPage() {
  return (
    <Card>
      <CardHeader className=" px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store!</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className=" text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <p className=" font-medium">Cust 1</p>
                <p className=" hidden md:flex text-sm text-muted-foreground">
                  cust1@customer.com
                </p>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>Successful</TableCell>
              <TableCell>{new Date().toLocaleDateString()}</TableCell>
              <TableCell className=" text-right">RM 250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p className=" font-medium">Cust 2</p>
                <p className=" hidden md:flex text-sm text-muted-foreground">
                  cust2@customer.com
                </p>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>{new Date().toLocaleDateString()}</TableCell>
              <TableCell className=" text-right">RM 2500.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
