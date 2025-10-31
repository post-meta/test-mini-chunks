/**
 * AI Context API Endpoint
 * Optimized for: ChatGPT Search, Claude AI, Perplexity, Google SGE
 */

import { NextResponse } from 'next/server';

export async function GET() {
  const businessContext = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Test Mini Closets",
    "description": "Professional closet services in Seattle, WA",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "addressCountry": "US"
    },
    "telephone": "(206) 555-0100",
    "email": "test@testclosets.com",
    "url": "https://test-mini-chunks.vercel.app",
    
    // AI-Specific: Q&A Format (for ChatGPT, Claude)
    "aiContext": {
      "keyQuestions": [
        {
          "question": "What services does Test Mini Closets offer?",
          "answer": "Test Mini Closets provides professional closet services in Seattle, WA"
        },
        {
          "question": "Where does Test Mini Closets operate?",
          "answer": "We serve Seattle, WA and surrounding areas"
        },
        {
          "question": "How can I contact Test Mini Closets?",
          "answer": "Call us at (206) 555-0100 or email test@testclosets.com"
        }
      ],
      
      // Voice Search Optimization
      "voiceSearchQueries": [
        "closet near me",
        "best closet in Seattle",
        "closet services Seattle"
      ]
    }
  };

  return NextResponse.json(businessContext, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}