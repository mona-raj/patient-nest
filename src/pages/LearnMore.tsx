import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { Award, Users, Building2, Trophy } from "lucide-react";
const LearnMore = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto py-20 px-[80px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to MediSync Hospital</h1>
          <p className="text-lg text-muted-foreground">
            A pioneer in modern healthcare technology and patient care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <Building2 className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">500+</h3>
              <p className="text-muted-foreground">Hospital Beds</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">200+</h3>
              <p className="text-muted-foreground">Expert Doctors</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <Trophy className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">#1</h3>
              <p className="text-muted-foreground">National Ranking</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">50+</h3>
              <p className="text-muted-foreground">Medical Awards</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Our Excellence</h2>
            <p className="text-muted-foreground">
              MediSync Hospital has been at the forefront of medical innovation for over
              50 years. Our state-of-the-art facilities and expert medical staff ensure
              the highest quality of patient care.
            </p>
            <p className="text-muted-foreground">
              We're proud to be ranked #1 nationally for patient satisfaction and
              medical outcomes. Our commitment to excellence has earned us numerous
              accolades and recognition in the medical community.
            </p>
          </div>
          <div className="bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d')] bg-cover bg-center rounded-lg min-h-[300px]" />
        </div>
      </div>
    </div>;
};
export default LearnMore;