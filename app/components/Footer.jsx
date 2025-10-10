import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CreditCard,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-8 lg:pt-16 lg:pb-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* About / Company */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Matoyeh Media & Tech
            </h4>
            <p className="text-sm">
              We specialize in general printing, videography, training, branding, and more.
              <br />
              <strong>Super Bonanza:</strong> 10% – 40% discount on all printings.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              08158233333 · 08068899417  
              <br />
              Unity Garden, Opp. A.A Rano, Secretariat Junction Ado, Karu, Nasarawa State
            </p>
          </div>

          {/* Help & Information */}
          <div>
            <h5 className="mb-4 font-semibold text-white">Help & Information</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Paper Quality</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Business / Earn */}
          <div>
            <h5 className="mb-4 font-semibold text-white">Business / Earn</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Become a Reseller</a></li>
              <li><a href="#" className="hover:text-white">Sell Your Designs</a></li>
              <li><a href="#" className="hover:text-white">Affiliate / Referral</a></li>
              <li><a href="#" className="hover:text-white">Marketplace</a></li>
            </ul>
          </div>

          {/* Social / Payments */}
          <div>
            <h5 className="mb-4 font-semibold text-white">Connect & Pay</h5>
            <div className="flex items-center space-x-4 text-gray-400">
              <a href="#" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><Linkedin className="w-5 h-5" /></a>
            </div>
            <div className="mt-6 flex items-center space-x-3">
              <CreditCard className="w-6 h-6 text-gray-400" />
              <Globe className="w-6 h-6 text-gray-400" />
              {/* Replace with actual payment logos / icons */}
              <span className="text-sm text-gray-400">Visa • Mastercard • Verve • Paystack</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Matoyeh Media & Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
