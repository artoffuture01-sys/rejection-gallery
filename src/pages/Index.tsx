import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileX } from "lucide-react";

const Index = () => {
  const [images, setImages] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const maxRejections = 100;

  useEffect(() => {
    // Load images from public/rejections folder
    const loadImages = async () => {
      // List of rejection screenshots - add your filenames here
      const imageList: string[] = [
        '/rejections/Screenshot_20251022-120724.Gmail.png',
        // Add more rejection screenshots here as you collect them
      ];
      
      setImages(imageList);
      setProgress((imageList.length / maxRejections) * 100);
    };

    loadImages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header Section */}
        <header className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <FileX className="w-12 h-12 text-primary" strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent leading-tight">
            My Rejection Journey
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every rejection is a step forward. Tracking my path to success.
          </p>
        </header>

        {/* Progress Section */}
        <Card className="mb-16 p-8 shadow-[var(--shadow-card)] border-border/50 backdrop-blur-sm bg-card/80">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-foreground">
                Rejection Counter
              </h2>
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {images.length} / {maxRejections}
              </span>
            </div>
            <Progress 
              value={progress} 
              className="h-4 bg-secondary"
            />
            <p className="text-sm text-muted-foreground text-center">
              Each application brings me closer to the right opportunity
            </p>
          </div>
        </Card>

        {/* Gallery Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Rejection Gallery
          </h2>
          
          {images.length === 0 ? (
            <Card className="p-12 text-center shadow-[var(--shadow-card)] border-border/50 bg-card/80">
              <FileX className="w-16 h-16 mx-auto mb-4 text-muted-foreground" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                No rejections yet
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Add your rejection email screenshots to the <code className="bg-secondary px-2 py-1 rounded text-sm">public/rejections</code> folder to see them here.
              </p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <Card 
                  key={index}
                  className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 border-border/50 bg-card"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-secondary">
                    <img
                      src={image}
                      alt={`Rejection ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-sm font-medium text-foreground">
                        Application #{index + 1}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Instructions Section */}
        <Card className="mt-16 p-8 shadow-[var(--shadow-card)] border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            How to Add Your Rejections
          </h3>
          <ol className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="font-bold text-primary">1.</span>
              <span>Take screenshots of your rejection emails</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">2.</span>
              <span>Add them to the <code className="bg-secondary px-2 py-1 rounded text-sm">public/rejections</code> folder in your project</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">3.</span>
              <span>The gallery will automatically update with your new rejections</span>
            </li>
          </ol>
        </Card>
      </div>
    </div>
  );
};

export default Index;
