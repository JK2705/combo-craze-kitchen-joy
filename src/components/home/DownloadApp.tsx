
import React from "react";
import { Button } from "@/components/ui/button";

const DownloadApp: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">
              Get The Combo Craze App
            </h2>
            <p className="text-lg max-w-md mb-8">
              Download our mobile app for exclusive deals, faster ordering, and real-time delivery tracking.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white"
              >
                App Store
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white"
              >
                Google Play
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-3 shadow-xl">
              <div className="bg-black rounded-2xl overflow-hidden w-64 h-[500px]">
                {/* This would be a mobile app screenshot */}
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <p className="text-gray-400 text-center p-4">
                    Mobile app interface would be displayed here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
