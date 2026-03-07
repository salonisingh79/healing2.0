import { useState } from 'react';
import React from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import { 
  ChevronLeft, 
  CreditCard, 
  Smartphone, 
  Building2, 
  Shield, 
  CheckCircle,
  Tag,
  Info,
  Lock,
  Calendar,
  MapPin,
  User,
  Mail,
  Phone as PhoneIcon
} from 'lucide-react';

const PAYMENT_METHODS = [
  { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, popular: true },
  { id: 'upi', name: 'UPI', icon: Smartphone, popular: true },
  { id: 'netbanking', name: 'Net Banking', icon: Building2, popular: false },
];

const TAX_RATE = 0.18; // 18% GST for Indian bookings
const PROCESSING_FEE = 500; // ₹500 payment gateway fee

export function PaymentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState<string>('card');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState<{code: string; discount: number} | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('');

  // Calculate pricing
  const basePrice = bookingData.price || 165000;
  const processingFee = PROCESSING_FEE;
  const subtotal = basePrice + processingFee;
  const discountAmount = promoApplied ? (basePrice * promoApplied.discount / 100) : 0;
  const priceAfterDiscount = subtotal - discountAmount;
  const taxAmount = Math.round(priceAfterDiscount * TAX_RATE);
  const totalAmount = priceAfterDiscount + taxAmount;

  // Promo codes database
  const PROMO_CODES: Record<string, {discount: number; name: string}> = {
    'EARLY25': { discount: 25, name: 'Early Bird Special' },
    'COUPLE30': { discount: 30, name: 'Couple\'s Wellness' },
    'FIRST15': { discount: 15, name: 'First Booking' },
    'HEAL20': { discount: 20, name: 'Healing Journey' }
  };

  const applyPromoCode = () => {
    const promo = PROMO_CODES[promoCode.toUpperCase()];
    if (promo) {
      setPromoApplied({ code: promoCode.toUpperCase(), discount: promo.discount });
    } else {
      alert('Invalid promo code');
    }
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/confirmation', { 
        state: { 
          ...bookingData,
          paymentStatus: 'paid',
          paymentMethod,
          totalPaid: totalAmount,
          transactionId: `TXN${Date.now()}`,
          paidAt: new Date().toISOString(),
          promoCode: promoApplied?.code,
          discountAmount
        } 
      });
    }, 2000);
  };

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-primary/5 to-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          
          <Link
            to={`/enquiry/${id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Details
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-2">
            Complete Your Booking
          </h1>
          <p className="text-foreground/60 mb-8">
            Secure payment with 256-bit SSL encryption
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Payment Form */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Booking Summary Header */}
              <div className="bg-white rounded-xl border border-primary/20 p-6">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Your Booking Details
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-xs text-foreground/60 mb-1">Duration & Dates</div>
                      <div className="font-semibold text-foreground">{bookingData.duration} Days</div>
                      <div className="text-sm text-foreground/70">{bookingData.startDate}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-xs text-foreground/60 mb-1">Guest Name</div>
                      <div className="font-semibold text-foreground">
                        {bookingData.firstName} {bookingData.lastName}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-xs text-foreground/60 mb-1">Email</div>
                      <div className="text-sm text-foreground/70">{bookingData.email}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneIcon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-xs text-foreground/60 mb-1">Phone</div>
                      <div className="text-sm text-foreground/70">{bookingData.phone}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="bg-white rounded-xl border border-muted/50 p-6">
                <h3 className="font-bold text-foreground mb-4">Select Payment Method</h3>
                
                <div className="space-y-3 mb-6">
                  {PAYMENT_METHODS.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === method.id
                          ? 'border-primary bg-primary/5'
                          : 'border-muted hover:border-primary/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          paymentMethod === method.id ? 'bg-primary text-white' : 'bg-muted/50'
                        }`}>
                          <method.icon className="w-5 h-5" />
                        </div>
                        <span className="font-semibold">{method.name}</span>
                      </div>
                      {method.popular && (
                        <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-bold rounded">
                          Popular
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Payment Forms */}
                <form onSubmit={handlePayment} className="space-y-4">
                  
                  {paymentMethod === 'card' && (
                    <div className="space-y-4 p-4 bg-muted/10 rounded-xl">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          value={cardDetails.number}
                          onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                          className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Cardholder Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="JOHN DOE"
                          value={cardDetails.name}
                          onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                          className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="MM/YY"
                            maxLength={5}
                            value={cardDetails.expiry}
                            onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                            className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="123"
                            maxLength={3}
                            value={cardDetails.cvv}
                            onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                            className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'upi' && (
                    <div className="p-4 bg-muted/10 rounded-xl">
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        UPI ID *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="yourname@paytm"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                      <p className="text-xs text-foreground/60 mt-2">
                        Enter your UPI ID (e.g., name@paytm, name@gpay, name@phonepe)
                      </p>
                    </div>
                  )}

                  {paymentMethod === 'netbanking' && (
                    <div className="p-4 bg-muted/10 rounded-xl">
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Select Your Bank *
                      </label>
                      <select
                        required
                        value={selectedBank}
                        onChange={(e) => setSelectedBank(e.target.value)}
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Choose a bank</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="axis">Axis Bank</option>
                        <option value="kotak">Kotak Mahindra Bank</option>
                      </select>
                    </div>
                  )}

                  {/* Security Notice */}
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                    <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-semibold text-foreground mb-1">Secure Payment</p>
                      <p className="text-foreground/70">
                        Your payment information is encrypted with 256-bit SSL. We never store your card details.
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        <Lock className="w-5 h-5" />
                        Pay ₹{totalAmount.toLocaleString('en-IN')}
                      </>
                    )}
                  </button>
                </form>
              </div>

            </div>

            {/* Right Column - Price Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                
                {/* Price Breakdown */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-muted/50">
                  <h3 className="font-bold text-foreground mb-4">Price Summary</h3>
                  
                  <div className="space-y-3 mb-4 pb-4 border-b border-muted/30">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">Package ({bookingData.duration} days)</span>
                      <span className="font-semibold">₹{basePrice.toLocaleString('en-IN')}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">Processing Fee</span>
                      <span className="font-semibold">₹{processingFee.toLocaleString('en-IN')}</span>
                    </div>

                    {promoApplied && (
                      <div className="flex justify-between text-sm text-accent">
                        <span className="font-semibold flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          {promoApplied.code} ({promoApplied.discount}% off)
                        </span>
                        <span className="font-bold">-₹{discountAmount.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">GST (18%)</span>
                      <span className="font-semibold">₹{taxAmount.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-lg">Total Amount</span>
                    <span className="font-bold text-2xl text-primary">₹{totalAmount.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="text-xs text-foreground/60 text-center mb-4">
                    ≈ ${Math.round(totalAmount / 83)} USD
                  </div>

                  {/* Promo Code */}
                  {!promoApplied ? (
                    <div className="border-t border-muted/30 pt-4">
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Have a Promo Code?
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Enter code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                          className="flex-1 px-3 py-2 border border-muted rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                        <button
                          type="button"
                          onClick={applyPromoCode}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold text-sm hover:bg-primary/20 transition-all"
                        >
                          Apply
                        </button>
                      </div>
                      
                      {/* Available Promo Codes Hint */}
                      <div className="mt-3 p-3 bg-accent/5 rounded-lg border border-accent/20">
                        <p className="text-xs text-accent font-semibold mb-2 flex items-center gap-1">
                          <Info className="w-3 h-3" />
                          Available Codes:
                        </p>
                        <div className="space-y-1">
                          {Object.entries(PROMO_CODES).map(([code, details]) => (
                            <p key={code} className="text-xs text-foreground/60">
                              <span className="font-mono font-bold text-foreground">{code}</span> - {details.name} ({details.discount}% off)
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="border-t border-muted/30 pt-4">
                      <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          <span className="text-sm font-semibold text-accent">
                            {promoApplied.code} Applied
                          </span>
                        </div>
                        <button
                          onClick={() => setPromoApplied(null)}
                          className="text-xs text-accent hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Cancellation Policy */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-bold text-foreground mb-3">Cancellation Policy</h3>
                  <div className="space-y-2 text-sm text-foreground/70">
                    <p>• <strong>15+ days before:</strong> 90% refund</p>
                    <p>• <strong>7-14 days before:</strong> 50% refund</p>
                    <p>• <strong>Less than 7 days:</strong> No refund</p>
                    <p className="text-xs mt-3 text-foreground/60">
                      Medical emergencies considered case-by-case
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
