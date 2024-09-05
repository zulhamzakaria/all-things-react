import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const NewSiteRoute = () => {
  return (
    <div className=" flex flex-col flex-1 items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Create Site</CardTitle>
          <CardDescription>
            Create your site here. Click 'save' once you are done
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className=" flex flex-col gap-y-6">
            <div></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default NewSiteRoute;
