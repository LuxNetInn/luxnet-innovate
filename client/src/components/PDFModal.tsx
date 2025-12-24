import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pdfUrl: string;
}

export default function PDFModal({ isOpen, onClose, title, pdfUrl }: PDFModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col bg-background border-border">
        <DialogHeader className="border-b border-border pb-4">
          <div className="flex items-center justify-between w-full">
            <DialogTitle className="text-2xl font-poppins text-green-500">{title}</DialogTitle>
            <div className="flex gap-2">
              <a
                href={pdfUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition font-semibold"
              >
                <Download className="w-4 h-4" />
                Descargar
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto bg-muted/50 rounded-lg">
          <iframe
            src={`${pdfUrl}#toolbar=0`}
            className="w-full h-full border-0"
            title={title}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
