import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Quiz from "@/pages/Quiz";
import Welcome from "@/pages/Welcome";
import Goals from "@/pages/Goals";
import Solution from "@/pages/Solution";
import Knowledge from "@/pages/Knowledge";
import NotCommon from "@/pages/NotCommon";
import BodyType from "@/pages/BodyType";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Quiz} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/goals" component={Goals} />
      <Route path="/solution" component={Solution} />
      <Route path="/knowledge" component={Knowledge} />
      <Route path="/not-common" component={NotCommon} />
      <Route path="/body-type" component={BodyType} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
