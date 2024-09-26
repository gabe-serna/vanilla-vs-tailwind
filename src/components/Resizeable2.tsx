import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "./ui/resizable";

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={25} className="md:min-w-[33%] min-w-full">
        <iframe
          id="iframe"
          src="../responsive2.html"
          className="border-0 size-full"
        />
      </ResizablePanel>
      <ResizableHandle className="hidden md:flex" withHandle />
      <ResizablePanel defaultSize={0}></ResizablePanel>
    </ResizablePanelGroup>
  );
}
