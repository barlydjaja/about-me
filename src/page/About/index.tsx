import { ArrowLeft, Calendar, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from 'components/ui/button';
import { pathName } from 'routes';
import { Link } from 'react-router';
import profile from 'assets/profile.jpeg';

const About = () => {
  return (
    <div className="container py-12 max-w-4xl m-auto px-4">
      <Button variant="ghost" size="sm" asChild className="mb-4">
        <Link to={pathName.Home}>
          <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
        </Link>
      </Button>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="rounded-lg overflow-hidden bg-muted aspect-square relative">
            <span className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <img src={profile} alt="Profile" className="w-full h-full object-cover" />
            </span>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Hi, I&apos;m Barly. I was born in 1997, Jakarta, Indonesia.
            <br/>
            I have been working professionally as a software engineer since January, 2021.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">My Journey</h2>
              <p className="text-muted-foreground mb-4">
                I started my software engineering journey when covid hits in 2020.
                I was a recent graduate from University of Indonesia, majoring in Mechanical Engineering.
                Since we were not allowed to go out, I decided to learn programming and take bootcamp class for 3 months in frontend development.
              </p>
              <p className="text-muted-foreground">
                And the rest is history. Here I am now &#58;&#41;
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <GraduationCap className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Bachelor of Engineering</h3>
                    <p className="text-muted-foreground">University of Indonesia, Indonesia</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>2016 - 2020</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1">
                    <GraduationCap className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Master of Computer Science</h3>
                    <p className="text-muted-foreground">Binus University, Indonesia</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>2021 - 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Briefcase className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Software Engineer, Frontend</h3>
                    <p className="text-muted-foreground">Shopee, Indonesia</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>2022 - 2025</span>
                    </div>
                    <p className="mt-2">Worked on various customer facing products and CMS for Shopee&apos;s internal team. I mostly used ReactJs and React Native.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1">
                    <Briefcase className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Software Engineer, Frontend</h3>
                    <p className="text-muted-foreground">Rupiah Cepat, Indonesia</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>2021 - 2022</span>
                    </div>
                    <p className="mt-2">Peer-to-peer lending platform for Indonesian consumers. The mother company is from China, but the opened a branch in Indonesia. I mostly used VueJs and NuxtJs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
