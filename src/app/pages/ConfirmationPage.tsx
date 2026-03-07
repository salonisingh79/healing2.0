import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import { 
  CheckCircle, 
  MessageCircle, 
  Calendar, 
  Mail, 
  Phone, 
  Download,
  CreditCard,
  CheckCircle2,
  Clock,
  XCircle,
  RotateCcw,
  User,
  MapPin,
  Receipt
} from 'lucide-react';

const PAYMENT_STATUS_CONFIG = {
  paid: {
    icon: CheckCircle2,
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    label: 'Payment Successful'
  },
  pending: {
    icon: Clock,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    label: 'Payment Pending'
  },
  failed: {
    icon: XCircle,
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-200',
    label: 'Payment Failed'
  },
  refunded: {
    icon: RotateCcw,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    label: 'Payment Refunded'
  }
};

export function ConfirmationPage() {
  const location = useLocation();
  const bookingData = location.state || {};
  const paymentStatus = bookingData.paymentStatus || 'pending';
  const statusConfig = PAYMENT_STATUS_CONFIG[paymentStatus as keyof typeof PAYMENT_STATUS_CONFIG] || PAYMENT_STATUS_CONFIG.pending;

  const generateInvoice = () => {
    // Generate invoice HTML
    const invoiceHTML = `
<!DOCTYPE html>
<html>
<head>
  <title>Invoice - The Healing Groove</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; }
    .header { text-align: center; margin-bottom: 40px; border-bottom: 3px solid #00864d; padding-bottom: 20px; }
    .logo { color: #00864d; font-size: 28px; font-weight: bold; margin-bottom: 5px; }
    .invoice-info { display: flex; justify-content: space-between; margin-bottom: 30px; }
    .section { margin-bottom: 20px; }
    .section-title { font-weight: bold; margin-bottom: 10px; color: #00864d; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
    th { background-color: #f8f9fa; font-weight: bold; }
    .total-row { font-weight: bold; font-size: 18px; background-color: #f0fdf4; }
    .status-badge { display: inline-block; padding: 6px 12px; border-radius: 6px; font-weight: bold; }
    .status-paid { background-color: #d1fae5; color: #065f46; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px; }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">🌿 The Healing Groove</div>
    <div>Premium Ayurvedic Wellness Retreats</div>
  </div>
  
  <div class="invoice-info">
    <div>
      <div class="section-title">INVOICE TO</div>
      <div><strong>${bookingData.firstName} ${bookingData.lastName}</strong></div>
      <div>${bookingData.email}</div>
      <div>${bookingData.phone}</div>
      <div>${bookingData.country}</div>
    </div>
    <div style="text-align: right;">
      <div class="section-title">INVOICE DETAILS</div>
      <div><strong>Invoice #:</strong> ${bookingData.transactionId || 'INV-' + Date.now()}</div>
      <div><strong>Date:</strong> ${new Date().toLocaleDateString()}</div>
      <div><strong>Status:</strong> <span class="status-badge status-paid">${statusConfig.label.toUpperCase()}</span></div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">BOOKING DETAILS</div>
    <div><strong>Duration:</strong> ${bookingData.duration} Days Wellness Retreat</div>
    <div><strong>Start Date:</strong> ${bookingData.startDate}</div>
    <div><strong>Payment Method:</strong> ${bookingData.paymentMethod === 'card' ? 'Credit/Debit Card' : bookingData.paymentMethod === 'upi' ? 'UPI' : 'Net Banking'}</div>
  </div>

  <table>
    <thead>
      <tr>
        <th>Description</th>
        <th style="text-align: right;">Amount (₹)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Wellness Package (${bookingData.duration} days)</td>
        <td style="text-align: right;">${((bookingData.totalPaid || 165000) / 1.18 - 500).toLocaleString('en-IN')}</td>
      </tr>
      <tr>
        <td>Processing Fee</td>
        <td style="text-align: right;">500</td>
      </tr>
      ${bookingData.discountAmount ? `
      <tr>
        <td>Discount (${bookingData.promoCode})</td>
        <td style="text-align: right; color: #059669;">-${bookingData.discountAmount.toLocaleString('en-IN')}</td>
      </tr>
      ` : ''}
      <tr>
        <td>GST (18%)</td>
        <td style="text-align: right;">${Math.round((bookingData.totalPaid || 165000) * 0.18 / 1.18).toLocaleString('en-IN')}</td>
      </tr>
      <tr class="total-row">
        <td>TOTAL PAID</td>
        <td style="text-align: right;">₹${(bookingData.totalPaid || 165000).toLocaleString('en-IN')}</td>
      </tr>
    </tbody>
  </table>

  <div class="footer">
    <p><strong>The Healing Groove</strong> | Premium Ayurvedic Wellness Platform</p>
    <p>Email: support@thehealinggroove.com | Phone: +91 98765 43210</p>
    <p>GSTIN: 29ABCDE1234F1Z5 | PAN: ABCDE1234F</p>
    <p style="margin-top: 15px;">Thank you for choosing The Healing Groove for your wellness journey!</p>
  </div>
</body>
</html>
    `;

    // Create blob and download
    const blob = new Blob([invoiceHTML], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Invoice-${bookingData.transactionId || Date.now()}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-primary/5 to-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-4">
              <CheckCircle className="w-12 h-12 text-accent" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-3">
              {paymentStatus === 'paid' ? 'Booking Confirmed!' : 'Booking Received!'}
            </h1>
            <p className="text-lg text-foreground/70">
              Thank you, {bookingData.firstName}. We're excited to support your healing journey.
            </p>
          </div>

          {/* Payment Status */}
          {paymentStatus && (
            <div className={`${statusConfig.bg} ${statusConfig.border} border-2 rounded-xl p-6 mb-6`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0`}>
                  <statusConfig.icon className={`w-6 h-6 ${statusConfig.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-bold ${statusConfig.color} mb-2`}>
                    {statusConfig.label}
                  </h3>
                  
                  {paymentStatus === 'paid' && (
                    <>
                      <div className="space-y-2 text-sm text-foreground/70 mb-4">
                        <div className="flex justify-between">
                          <span>Transaction ID:</span>
                          <span className="font-mono font-semibold text-foreground">{bookingData.transactionId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Payment Method:</span>
                          <span className="font-semibold text-foreground capitalize">{bookingData.paymentMethod}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Amount Paid:</span>
                          <span className="font-bold text-foreground">₹{bookingData.totalPaid?.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Payment Date:</span>
                          <span className="font-semibold text-foreground">
                            {new Date(bookingData.paidAt).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                        </div>
                        {bookingData.promoCode && (
                          <div className="flex justify-between">
                            <span>Promo Code Applied:</span>
                            <span className="font-mono font-bold text-accent">{bookingData.promoCode}</span>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={generateInvoice}
                        className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all"
                      >
                        <Download className="w-4 h-4" />
                        Download Invoice/Receipt
                      </button>
                    </>
                  )}

                  {paymentStatus === 'pending' && (
                    <p className="text-sm text-foreground/70">
                      Your payment is being processed. You'll receive a confirmation email once completed.
                    </p>
                  )}

                  {paymentStatus === 'failed' && (
                    <div>
                      <p className="text-sm text-foreground/70 mb-3">
                        We couldn't process your payment. Please try again or contact support.
                      </p>
                      <Link
                        to={`/payment/${bookingData.centreId || 1}`}
                        state={bookingData}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all"
                      >
                        <CreditCard className="w-4 h-4" />
                        Retry Payment
                      </Link>
                    </div>
                  )}

                  {paymentStatus === 'refunded' && (
                    <p className="text-sm text-foreground/70">
                      Your payment has been refunded. It may take 5-7 business days to reflect in your account.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Booking Summary */}
          {bookingData.duration && (
            <div className="bg-white rounded-xl border border-muted/50 shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Receipt className="w-5 h-5 text-primary" />
                Booking Summary
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-xs text-foreground/60 mb-1">Duration & Start Date</div>
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
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-xs text-foreground/60 mb-1">Phone</div>
                    <div className="text-sm text-foreground/70">{bookingData.phone}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* What Happens Next */}
          <div className="bg-white rounded-xl border border-muted/50 shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">What Happens Next</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Confirmation Email</h3>
                  <p className="text-sm text-foreground/70">
                    You'll receive a detailed confirmation email with your booking details and invoice
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Care Guide Assignment</h3>
                  <p className="text-sm text-foreground/70">
                    Within 2 hours, your dedicated care guide will be assigned to coordinate your retreat
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Pre-Arrival Information</h3>
                  <p className="text-sm text-foreground/70">
                    You'll receive travel details, packing list, and what to expect at the wellness centre
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Your Healing Journey Begins</h3>
                  <p className="text-sm text-foreground/70">
                    Arrive at the centre and begin your transformative Ayurvedic wellness experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Your Care Guide */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/20 p-8 mb-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Meet Your Care Guide</h2>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-2xl relative">
                A
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Ananya Sharma</h3>
                <p className="text-sm text-foreground/60 mb-2">Senior Wellness Care Guide</p>
                <p className="text-sm text-foreground/70">
                  5+ years helping international travelers find their perfect wellness experience
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="mailto:ananya@thehealinggroove.com"
                className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all"
              >
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs text-foreground/60">Email</div>
                  <div className="text-sm font-semibold text-foreground">ananya@healing...</div>
                </div>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                <div>
                  <div className="text-xs text-white/80">WhatsApp</div>
                  <div className="text-sm font-semibold">+91 98765 43210</div>
                </div>
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Link
              to="/dashboard"
              className="block w-full py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-center rounded-lg font-bold transition-all"
            >
              View My Bookings
            </Link>
            
            {paymentStatus === 'paid' && (
              <button
                onClick={generateInvoice}
                className="flex items-center justify-center gap-2 w-full py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all"
              >
                <Download className="w-5 h-5" />
                Download Invoice
              </button>
            )}

            <Link
              to="/search"
              className="block w-full py-3 text-foreground/70 text-center hover:text-primary transition-colors font-medium"
            >
              Explore More Centres
            </Link>
          </div>

          {/* Email Confirmation Note */}
          <div className="mt-8 text-center text-sm text-foreground/60 bg-muted/30 rounded-lg p-4">
            📧 A confirmation email has been sent to <strong>{bookingData.email}</strong>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
