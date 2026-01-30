import MacWindow from "./MacWindow"

const PdfWindow = () => {
    return <div className="h-full w-full bg-[#121212] flex flex-col">
        <div id="header" className="px-3 py-2 border-b border-white/10">
            <p className="text-sm font-medium">Document Viewer</p>
            <p className="text-[11px] opacity-60">Documentation.pdf</p>
        </div>

        <div className="flex-1 overflow-hidden">
            <iframe src="../../../Public/assets/Project Documentation.pdf"
                className="w-full h-full"
            />
        </div>
    </div>
}

const Pdf = ({windowName, setWindowState}) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
        <PdfWindow />
    </MacWindow>
  )
}

export default Pdf
