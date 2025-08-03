'use client';
import { useState } from 'react';
import { FaShieldAlt, FaChartLine, FaClock, FaCheckCircle, FaExclamationTriangle, FaEye, FaDownload, FaArrowRight, FaUser, FaGavel, FaPlay, FaUpload, FaFilePdf, FaFileImage, FaFileAlt, FaMoneyBillWave, FaMapMarkerAlt } from 'react-icons/fa';
import { MdAnalytics } from 'react-icons/md';
import { TbRobot } from 'react-icons/tb';
import Link from 'next/link';

interface Document {
  id: string;
  name: string;
  type: 'policy' | 'claim_form' | 'medical_report' | 'police_report' | 'estimate' | 'photos';
  status: 'uploading' | 'processing' | 'verified' | 'flagged' | 'rejected';
  uploadedAt: Date;
  processedAt?: Date;
  confidence: number;
  aiInsights: string[];
  fileSize: string;
  icon: React.ReactNode;
}

interface Activity {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'active' | 'completed';
  progress: number;
  details: string[];
  visualFeedback: string[];
  duration: string;
  icon: React.ReactNode;
}

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: 'pending' | 'active' | 'completed';
  activities: Activity[];
  duration: string;
  progress: number;
  technicalDetails?: string[];
  metrics?: {
    accuracy: string;
    speed: string;
    confidence: string;
  };
}

export default function ClaimsDemoPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  const [uploadedDocuments, setUploadedDocuments] = useState<Document[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [processSteps, setProcessSteps] = useState<ProcessStep[]>([]);
  const [currentVisualFeedback, setCurrentVisualFeedback] = useState<string[]>([]);
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  const [demoCompleted, setDemoCompleted] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);

  const mockDocuments: Document[] = [
    {
      id: '1',
      name: 'Policy_Document_2024.pdf',
      type: 'policy',
      status: 'uploading',
      uploadedAt: new Date(),
      confidence: 0,
      aiInsights: [
        "📋 Policy Number: POL-2024-001234",
        "👤 Insured: Ahmed Rahman",
        "🚗 Vehicle: Toyota Corolla 2022",
        "💰 Coverage: Comprehensive + Third Party",
        "📅 Valid Until: December 31, 2024"
      ],
      fileSize: '2.4 MB',
      icon: <FaFilePdf className="text-red-400" />
    },
    {
      id: '2',
      name: 'Auto_Claim_Form.pdf',
      type: 'claim_form',
      status: 'uploading',
      uploadedAt: new Date(),
      confidence: 0,
      aiInsights: [
        "📅 Incident Date: March 15, 2024",
        "📍 Location: Dhaka-Mymensingh Highway",
        "🚨 Accident Type: Collision with barrier",
        "👥 Driver: Ahmed Rahman",
        "📝 Description: Vehicle skidded on wet road"
      ],
      fileSize: '1.8 MB',
      icon: <FaFilePdf className="text-red-400" />
    },
    {
      id: '3',
      name: 'Damage_Photos_01.jpg',
      type: 'photos',
      status: 'uploading',
      uploadedAt: new Date(),
      confidence: 0,
      aiInsights: [
        "🖼️ Front bumper damage - 60% severity",
        "🚗 Hood dent - 40% severity",
        "💡 Headlight assembly - 80% damage",
        "🔧 Estimated repair cost: ৳85,000",
        "📸 Photo quality: High resolution (4K)"
      ],
      fileSize: '3.2 MB',
      icon: <FaFileImage className="text-green-400" />
    },
    {
      id: '4',
      name: 'Police_Report.pdf',
      type: 'police_report',
      status: 'uploading',
      uploadedAt: new Date(),
      confidence: 0,
      aiInsights: [
        "👮‍♂️ Officer: Sub-Inspector Karim",
        "🏢 Station: Dhaka Traffic Police",
        "📋 Case Number: TR-2024-5678",
        "⚖️ No third party involved",
        "✅ Official verification completed"
      ],
      fileSize: '1.5 MB',
      icon: <FaFilePdf className="text-red-400" />
    },
    {
      id: '5',
      name: 'Repair_Estimate.pdf',
      type: 'estimate',
      status: 'uploading',
      uploadedAt: new Date(),
      confidence: 0,
      aiInsights: [
        "🔧 Workshop: Toyota Authorized Service",
        "💰 Total Estimate: ৳85,000",
        "⏱️ Repair Time: 5-7 days",
        "📋 Parts: Genuine Toyota parts",
        "✅ Estimate approved by workshop"
      ],
      fileSize: '2.1 MB',
      icon: <FaFilePdf className="text-red-400" />
    }
  ];

  const initialProcessSteps: ProcessStep[] = [
    {
      id: 1,
      title: "Document Upload & Validation",
      description: "AI validates and processes uploaded documents",
      icon: <FaUpload className="text-2xl" />,
      status: 'pending',
      activities: [
        {
          id: "1.1",
          name: "Document Format Validation",
          description: "Checking file types and compatibility",
          status: 'pending',
          progress: 0,
          details: [
            "🔍 Scanning file: Policy_Document_2024.pdf",
            "📋 Detected format: PDF (Portable Document Format)",
            "✅ File size: 2.4 MB (within limits)",
            "🔒 Security check: No malware detected",
            "📊 Compression: Standard PDF compression",
            "🎯 Quality: High resolution (300 DPI)",
            "📄 Pages: 12 pages detected",
            "✅ Format validation: PASSED"
          ],
          visualFeedback: [
            "🔍 Scanning file structure...",
            "📋 Analyzing file headers...",
            "✅ Validating PDF format...",
            "🔒 Running security scan...",
            "📊 Checking file integrity...",
            "🎯 Verifying resolution...",
            "📄 Counting pages...",
            "✅ Format validation complete!"
          ],
          duration: "0.3 seconds",
          icon: <FaFilePdf className="text-xl" />
        },
        {
          id: "1.2",
          name: "OCR Text Extraction",
          description: "Converting images to searchable text",
          status: 'pending',
          progress: 0,
          details: [
            "🔍 Processing page 1 of 8...",
            "📝 Extracting text: 'Policy Number: POL-2024-001234'",
            "👤 Found customer: 'Ahmed Rahman'",
            "🚗 Vehicle details: 'Toyota Corolla 2022'",
            "💰 Coverage amount: '৳500,000'",
            "📅 Policy period: 'Jan 1, 2024 - Dec 31, 2024'",
            "🔍 Processing remaining pages...",
            "✅ OCR extraction complete (99.2% accuracy)"
          ],
          visualFeedback: [
            "🔍 Initializing OCR engine...",
            "📝 Extracting text from page 1...",
            "👤 Identifying customer information...",
            "🚗 Locating vehicle details...",
            "💰 Extracting coverage amounts...",
            "📅 Finding policy dates...",
            "🔍 Processing remaining pages...",
            "✅ OCR extraction successful!"
          ],
          duration: "1.2 seconds",
          icon: <FaFileAlt className="text-xl" />
        },
        {
          id: "1.3",
          name: "Document Authenticity Verification",
          description: "Digital signature validation",
          status: 'pending',
          progress: 0,
          details: [
            "🔐 Checking digital signature...",
            "📋 Certificate issuer: Bangladesh Insurance Authority",
            "✅ Certificate valid until: 2025-12-31",
            "🔒 Signature algorithm: RSA-2048",
            "📊 Hash verification: SHA-256 match",
            "🎯 Document integrity: Verified",
            "🔍 Timestamp validation: 2024-03-15 14:30:22",
            "✅ Authenticity verification: PASSED"
          ],
          visualFeedback: [
            "🔐 Validating digital signature...",
            "📋 Checking certificate authority...",
            "✅ Verifying certificate validity...",
            "🔒 Analyzing signature algorithm...",
            "📊 Computing document hash...",
            "🎯 Verifying document integrity...",
            "🔍 Checking timestamp...",
            "✅ Authenticity verified!"
          ],
          duration: "0.8 seconds",
          icon: <FaShieldAlt className="text-xl" />
        },
        {
          id: "1.4",
          name: "Policy Coverage Validation",
          description: "Cross-referencing with policy database",
          status: 'pending',
          progress: 0,
          details: [
            "📊 Querying policy database...",
            "🔍 Policy found: POL-2024-001234",
            "✅ Customer match: Ahmed Rahman",
            "🚗 Vehicle match: Toyota Corolla 2022",
            "💰 Coverage verified: Comprehensive + Third Party",
            "📋 Deductible: ৳5,000 (paid by customer)",
            "📅 Policy active: Yes (until Dec 31, 2024)",
            "✅ Coverage validation: PASSED"
          ],
          visualFeedback: [
            "📊 Connecting to policy database...",
            "🔍 Searching policy records...",
            "✅ Matching customer information...",
            "🚗 Verifying vehicle details...",
            "💰 Checking coverage types...",
            "📅 Validating policy dates...",
            "🎯 Determining claim eligibility...",
            "✅ Coverage validation complete!"
          ],
          duration: "0.5 seconds",
          icon: <MdAnalytics className="text-xl" />
        },
        {
          id: "1.5",
          name: "Damage Assessment from Photos",
          description: "AI image analysis for damage estimation",
          status: 'pending',
          progress: 0,
          details: [
            "🖼️ Analyzing damage photos...",
            "🚗 Front bumper damage: Moderate (৳25,000)",
            "🔧 Hood dent: Minor (৳15,000)",
            "💡 Headlight assembly: Severe (৳35,000)",
            "📏 Damage area: 2.3 square meters",
            "💰 Total repair cost: ৳85,000",
            "🎯 Confidence level: 94.7%",
            "✅ Damage assessment complete"
          ],
          visualFeedback: [
            "🖼️ Loading damage images...",
            "🚗 Analyzing front bumper damage...",
            "🔧 Assessing hood dent severity...",
            "💡 Evaluating headlight damage...",
            "📏 Calculating damage area...",
            "💰 Estimating repair costs...",
            "🎯 Computing confidence score...",
            "✅ Damage assessment successful!"
          ],
          duration: "2.1 seconds",
          icon: <FaFileImage className="text-xl" />
        },
        {
          id: "1.6",
          name: "Data Extraction",
          description: "Extracting key information",
          status: 'pending',
          progress: 0,
          details: [
            "📝 Extracting claim details...",
            "📅 Incident date: March 15, 2024",
            "📍 Location: Dhaka-Mymensingh Highway",
            "👤 Driver: Ahmed Rahman",
            "🚨 Accident type: Collision with barrier",
            "💰 Claim amount: ৳85,000",
            "📋 Supporting documents: 5 files",
            "✅ Data extraction complete"
          ],
          visualFeedback: [
            "📝 Parsing claim form data...",
            "📅 Extracting incident date...",
            "📍 Identifying accident location...",
            "👤 Finding driver information...",
            "🚨 Determining accident type...",
            "💰 Calculating claim amount...",
            "📋 Counting supporting documents...",
            "✅ Data extraction successful!"
          ],
          duration: "0.7 seconds",
          icon: <FaFileAlt className="text-xl" />
        },
        {
          id: "1.7",
          name: "Security Scanning",
          description: "Malware and virus detection",
          status: 'pending',
          progress: 0,
          details: [
            "🔐 Initializing security scan...",
            "🛡️ Scanning for malware...",
            "🔍 Checking file signatures...",
            "📊 Analyzing file behavior...",
            "🚨 Threat detection: None found",
            "✅ File integrity: Verified",
            "🔒 Encryption check: AES-256",
            "✅ Security scan: PASSED"
          ],
          visualFeedback: [
            "🔐 Starting security scan...",
            "🛡️ Running malware detection...",
            "🔍 Verifying file signatures...",
            "📊 Analyzing file behavior...",
            "🚨 Checking for threats...",
            "✅ Verifying file integrity...",
            "🔒 Validating encryption...",
            "✅ Security scan complete!"
          ],
          duration: "0.4 seconds",
          icon: <FaShieldAlt className="text-xl" />
        },
        {
          id: "1.8",
          name: "Quality Assessment",
          description: "Image resolution and clarity verification",
          status: 'pending',
          progress: 0,
          details: [
            "📏 Checking image resolution...",
            "🖼️ Photo quality: High (4K resolution)",
            "📊 Compression ratio: 85%",
            "🎯 Clarity score: 92/100",
            "📸 Metadata validation: Complete",
            "🔍 EXIF data: GPS coordinates found",
            "✅ Image quality: Excellent",
            "✅ Quality assessment: PASSED"
          ],
          visualFeedback: [
            "📏 Analyzing image resolution...",
            "🖼️ Assessing photo quality...",
            "📊 Checking compression...",
            "🎯 Computing clarity score...",
            "📸 Validating metadata...",
            "🔍 Extracting EXIF data...",
            "✅ Evaluating image quality...",
            "✅ Quality assessment complete!"
          ],
          duration: "0.6 seconds",
          icon: <FaFileImage className="text-xl" />
        }
      ],
      technicalDetails: [
        "🔧 OCR Engine: Google Cloud Vision API (99.2% accuracy)",
        "🛡️ Security: AWS GuardDuty + Custom ML models",
        "📊 Database: PostgreSQL with 10M+ policy records",
        "🖼️ Image Analysis: TensorFlow CNN for damage detection",
        "⚡ Processing: Parallel processing across 8 GPU cores",
        "📱 API: RESTful microservices architecture",
        "🔒 Encryption: AES-256 for document storage",
        "📈 Scalability: Auto-scaling up to 1000 concurrent requests"
      ],
      metrics: {
        accuracy: "99.7%",
        speed: "2.3 seconds per document",
        confidence: "94.2%"
      },
      duration: "2-3 minutes",
      progress: 0
    },
    {
      id: 2,
      title: "AI Risk Assessment",
      description: "Machine learning models analyze claim risk",
      icon: <MdAnalytics className="text-2xl" />,
      status: 'pending',
      activities: [
        {
          id: "2.1",
          name: "Historical Pattern Analysis",
          description: "Comparing with 10,000+ similar claims",
          status: 'pending',
          progress: 0,
          details: [
            "📊 Querying historical database...",
            "🔍 Found 10,247 similar claims",
            "📈 Pattern matching: 87% similarity",
            "🎯 Risk correlation: 0.73",
            "📊 Statistical analysis: Normal distribution",
            "🕒 Time series analysis: Seasonal patterns",
            "📍 Geographic clustering: Dhaka region",
            "✅ Historical analysis complete"
          ],
          visualFeedback: [
            "📊 Connecting to historical database...",
            "🔍 Searching similar claims...",
            "📈 Computing pattern similarity...",
            "🎯 Calculating risk correlations...",
            "📊 Running statistical analysis...",
            "🕒 Analyzing time patterns...",
            "📍 Clustering by location...",
            "✅ Historical analysis successful!"
          ],
          duration: "0.8 seconds",
          icon: <MdAnalytics className="text-xl" />
        },
        {
          id: "2.2",
          name: "Fraud Detection Algorithms",
          description: "Identifying suspicious patterns",
          status: 'pending',
          progress: 0,
          details: [
            "🚨 Initializing fraud detection...",
            "🔍 Anomaly detection: 95% precision",
            "📊 Behavioral analysis: Normal patterns",
            "🎯 Risk indicators: 0 flagged",
            "📈 Pattern recognition: No fraud detected",
            "🕒 Temporal analysis: Consistent timing",
            "📍 Location verification: Valid",
            "✅ Fraud detection: PASSED"
          ],
          visualFeedback: [
            "🚨 Starting fraud detection...",
            "🔍 Running anomaly detection...",
            "📊 Analyzing behavior patterns...",
            "🎯 Checking risk indicators...",
            "📈 Pattern recognition analysis...",
            "🕒 Temporal pattern check...",
            "📍 Location verification...",
            "✅ Fraud detection complete!"
          ],
          duration: "0.6 seconds",
          icon: <FaShieldAlt className="text-xl" />
        },
        {
          id: "2.3",
          name: "Risk Scoring Calculation",
          description: "AI model scoring (0-100 scale)",
          status: 'pending',
          progress: 0,
          details: [
            "🎯 Initializing risk scoring...",
            "📊 Feature extraction: 150+ indicators",
            "🤖 ML model prediction: XGBoost",
            "📈 Score calculation: 23/100",
            "🎯 Risk level: LOW",
            "📊 Confidence interval: 91.5%",
            "🔄 Model validation: PASSED",
            "✅ Risk scoring complete"
          ],
          visualFeedback: [
            "🎯 Starting risk scoring...",
            "📊 Extracting features...",
            "🤖 Running ML prediction...",
            "📈 Calculating risk score...",
            "🎯 Determining risk level...",
            "📊 Computing confidence...",
            "🔄 Validating model...",
            "✅ Risk scoring successful!"
          ],
          duration: "0.4 seconds",
          icon: <FaChartLine className="text-xl" />
        },
        {
          id: "2.4",
          name: "Claim Amount Validation",
          description: "Cross-checking with repair estimates",
          status: 'pending',
          progress: 0,
          details: [
            "💰 Validating claim amount...",
            "🔍 Repair estimate: ৳85,000",
            "📊 Market rate analysis: Within range",
            "🎯 Damage assessment: Consistent",
            "📈 Cost comparison: 92% accuracy",
            "🕒 Historical pricing: Normal",
            "📍 Regional rates: Standard",
            "✅ Amount validation: PASSED"
          ],
          visualFeedback: [
            "💰 Starting amount validation...",
            "🔍 Checking repair estimates...",
            "📊 Analyzing market rates...",
            "🎯 Comparing damage assessment...",
            "📈 Cost analysis...",
            "🕒 Historical pricing check...",
            "📍 Regional rate verification...",
            "✅ Amount validation complete!"
          ],
          duration: "0.5 seconds",
          icon: <FaMoneyBillWave className="text-xl" />
        },
        {
          id: "2.5",
          name: "Policy Compliance Check",
          description: "Verifying coverage and exclusions",
          status: 'pending',
          progress: 0,
          details: [
            "📋 Checking policy compliance...",
            "🔍 Coverage type: Comprehensive",
            "✅ Deductible: ৳5,000 (paid)",
            "📊 Policy limits: Within range",
            "🎯 Exclusions: None applicable",
            "📈 Claim eligibility: Eligible",
            "🕒 Policy period: Active",
            "✅ Compliance check: PASSED"
          ],
          visualFeedback: [
            "📋 Starting compliance check...",
            "🔍 Verifying coverage type...",
            "✅ Checking deductible...",
            "📊 Validating policy limits...",
            "🎯 Reviewing exclusions...",
            "📈 Determining eligibility...",
            "🕒 Checking policy period...",
            "✅ Compliance check complete!"
          ],
          duration: "0.3 seconds",
          icon: <FaFileAlt className="text-xl" />
        },
        {
          id: "2.6",
          name: "Temporal Analysis",
          description: "Checking claim timing patterns",
          status: 'pending',
          progress: 0,
          details: [
            "🕒 Analyzing timing patterns...",
            "📅 Incident date: March 15, 2024",
            "⏰ Time of day: 14:30 (normal)",
            "📊 Day of week: Friday (typical)",
            "🎯 Seasonal analysis: Normal",
            "📈 Frequency check: First claim",
            "🔄 Pattern consistency: Good",
            "✅ Temporal analysis: PASSED"
          ],
          visualFeedback: [
            "🕒 Starting temporal analysis...",
            "📅 Checking incident date...",
            "⏰ Analyzing time patterns...",
            "📊 Day of week analysis...",
            "🎯 Seasonal pattern check...",
            "📈 Frequency analysis...",
            "🔄 Pattern consistency...",
            "✅ Temporal analysis complete!"
          ],
          duration: "0.4 seconds",
          icon: <FaClock className="text-xl" />
        },
        {
          id: "2.7",
          name: "Geographic Risk Assessment",
          description: "Location-based risk factors",
          status: 'pending',
          progress: 0,
          details: [
            "📍 Analyzing location risk...",
            "🗺️ Location: Dhaka-Mymensingh Highway",
            "📊 Accident rate: 12% (normal)",
            "🎯 Road conditions: Good",
            "📈 Traffic density: Medium",
            "🕒 Weather conditions: Clear",
            "🔍 Police station: 2km away",
            "✅ Geographic assessment: PASSED"
          ],
          visualFeedback: [
            "📍 Starting location analysis...",
            "🗺️ Checking accident rates...",
            "📊 Analyzing road conditions...",
            "🎯 Traffic density check...",
            "📈 Weather condition analysis...",
            "🕒 Police proximity check...",
            "🔍 Geographic risk calculation...",
            "✅ Geographic assessment complete!"
          ],
          duration: "0.5 seconds",
          icon: <FaMapMarkerAlt className="text-xl" />
        },
        {
          id: "2.8",
          name: "Customer Behavior Analysis",
          description: "Historical claim patterns",
          status: 'pending',
          progress: 0,
          details: [
            "👥 Analyzing customer behavior...",
            "📊 Claim history: 0 previous claims",
            "🎯 Risk profile: Low risk",
            "📈 Payment history: Excellent",
            "🕒 Policy duration: 2 years",
            "📋 Compliance record: Clean",
            "🔍 Behavioral score: 95/100",
            "✅ Behavior analysis: PASSED"
          ],
          visualFeedback: [
            "👥 Starting behavior analysis...",
            "📊 Checking claim history...",
            "🎯 Assessing risk profile...",
            "📈 Payment history analysis...",
            "🕒 Policy duration check...",
            "📋 Compliance record review...",
            "🔍 Behavioral scoring...",
            "✅ Behavior analysis complete!"
          ],
          duration: "0.4 seconds",
          icon: <FaUser className="text-xl" />
        }
      ],
      technicalDetails: [
        "🤖 ML Models: XGBoost + Random Forest ensemble",
        "📊 Training Data: 2M+ historical claims (3 years)",
        "🎯 Risk Algorithm: Custom scoring matrix (0-100)",
        "🚨 Fraud Detection: Anomaly detection with 95% precision",
        "📈 Pattern Recognition: Deep learning CNN for image analysis",
        "🕒 Real-time Processing: <500ms response time",
        "📊 Feature Engineering: 150+ risk indicators",
        "🔍 Explainable AI: SHAP values for decision transparency"
      ],
      metrics: {
        accuracy: "96.8%",
        speed: "0.4 seconds",
        confidence: "91.5%"
      },
      duration: "30-60 seconds",
      progress: 0
    },
    {
      id: 3,
      title: "Automated Decision Engine",
      description: "AI makes initial claim decision",
      icon: <TbRobot className="text-2xl" />,
      status: 'pending',
      activities: [
        {
          id: "3.1",
          name: "Low-risk Claim Auto-approval",
          description: "Instant approval for scores &lt;30",
          status: 'pending',
          progress: 0,
          details: [
            "✅ Risk score: 23/100 (LOW)",
            "🎯 Auto-approval threshold: &lt;30",
            "📊 Decision: APPROVED",
            "⚡ Processing time: 0.2 seconds",
            "📋 Policy compliance: Verified",
            "💳 Payment amount: ৳85,000",
            "📝 Approval letter: Generated",
            "✅ Auto-approval complete"
          ],
          visualFeedback: [
            "🎯 Checking risk score...",
            "📊 Comparing with threshold...",
            "✅ Score 23 &lt; 30 (APPROVED)",
            "📋 Verifying policy compliance...",
            "💳 Calculating payment amount...",
            "📝 Generating approval letter...",
            "⚡ Processing payment setup...",
            "✅ Auto-approval successful!"
          ],
          duration: "0.2 seconds",
          icon: <FaCheckCircle className="text-xl" />
        },
        {
          id: "3.2",
          name: "High-risk Claim Flagging",
          description: "Manual review for scores &gt;70",
          status: 'pending',
          progress: 0,
          details: [
            "⚠️ Risk score: 23/100 (LOW)",
            "🎯 Manual review threshold: &gt;70",
            "📊 Decision: NOT REQUIRED",
            "⚡ Processing time: 0.1 seconds",
            "📋 Risk assessment: Passed",
            "🔄 Workflow: Auto-approval path",
            "📝 Status: No manual review needed",
            "✅ Flagging check complete"
          ],
          visualFeedback: [
            "⚠️ Checking risk score...",
            "🎯 Comparing with manual review threshold...",
            "📊 Score 23 &lt; 70 (NO REVIEW)",
            "📋 Risk assessment passed...",
            "🔄 Routing to auto-approval...",
            "📝 Updating workflow status...",
            "⚡ Processing decision...",
            "✅ Flagging check complete!"
          ],
          duration: "0.1 seconds",
          icon: <FaExclamationTriangle className="text-xl" />
        },
        {
          id: "3.3",
          name: "Policy Interpretation",
          description: "AI understanding of policy terms",
          status: 'pending',
          progress: 0,
          details: [
            "📖 Policy type: Comprehensive Auto",
            "🔍 Coverage analysis: Full coverage",
            "📊 Deductible: ৳5,000 (paid)",
            "🎯 Claim eligibility: Eligible",
            "📈 Policy limits: Within range",
            "🕒 Policy period: Active",
            "📋 Exclusions: None applicable",
            "✅ Policy interpretation complete"
          ],
          visualFeedback: [
            "📖 Reading policy document...",
            "🔍 Analyzing coverage terms...",
            "📊 Checking deductible status...",
            "🎯 Verifying claim eligibility...",
            "📈 Validating policy limits...",
            "🕒 Checking policy period...",
            "📋 Reviewing exclusions...",
            "✅ Policy interpretation successful!"
          ],
          duration: "0.3 seconds",
          icon: <FaFileAlt className="text-xl" />
        },
        {
          id: "3.4",
          name: "Coverage Verification",
          description: "Checking policy limits and deductibles",
          status: 'pending',
          progress: 0,
          details: [
            "🔍 Coverage type: Comprehensive",
            "📊 Policy limit: ৳500,000",
            "💰 Claim amount: ৳85,000",
            "✅ Within policy limits: YES",
            "📋 Deductible: ৳5,000 (paid)",
            "🎯 Coverage verified: APPROVED",
            "📈 Remaining limit: ৳415,000",
            "✅ Coverage verification complete"
          ],
          visualFeedback: [
            "🔍 Checking coverage type...",
            "📊 Validating policy limits...",
            "💰 Comparing claim amount...",
            "✅ Limit check passed...",
            "📋 Verifying deductible...",
            "🎯 Coverage approval...",
            "📈 Calculating remaining limit...",
            "✅ Coverage verification successful!"
          ],
          duration: "0.2 seconds",
          icon: <FaShieldAlt className="text-xl" />
        },
        {
          id: "3.5",
          name: "Payment Calculation",
          description: "Automated payment amount determination",
          status: 'pending',
          progress: 0,
          details: [
            "💳 Claim amount: ৳85,000",
            "📊 Deductible: ৳5,000 (paid)",
            "💰 Net payment: ৳85,000",
            "🎯 Payment method: Bank transfer",
            "📋 Processing fee: ৳0",
            "📈 Tax calculation: Included",
            "🔄 Payment routing: Automated",
            "✅ Payment calculation complete"
          ],
          visualFeedback: [
            "💳 Calculating payment amount...",
            "📊 Applying deductible...",
            "💰 Computing net payment...",
            "🎯 Selecting payment method...",
            "📋 Calculating processing fees...",
            "📈 Computing taxes...",
            "🔄 Setting up payment routing...",
            "✅ Payment calculation successful!"
          ],
          duration: "0.2 seconds",
          icon: <FaMoneyBillWave className="text-xl" />
        },
        {
          id: "3.6",
          name: "Confidence Scoring",
          description: "AI confidence level assessment",
          status: 'pending',
          progress: 0,
          details: [
            "📊 AI confidence: 94.7%",
            "🎯 Decision confidence: HIGH",
            "📈 Data quality: Excellent",
            "🔄 Model accuracy: 98.9%",
            "📋 Risk assessment: Reliable",
            "⚡ Processing speed: Optimal",
            "📊 Validation score: 96.2%",
            "✅ Confidence scoring complete"
          ],
          visualFeedback: [
            "📊 Computing AI confidence...",
            "🎯 Assessing decision confidence...",
            "📈 Evaluating data quality...",
            "🔄 Checking model accuracy...",
            "📋 Validating risk assessment...",
            "⚡ Measuring processing speed...",
            "📊 Final validation scoring...",
            "✅ Confidence scoring successful!"
          ],
          duration: "0.3 seconds",
          icon: <FaChartLine className="text-xl" />
        },
        {
          id: "3.7",
          name: "Decision Routing",
          description: "Directing to appropriate workflow",
          status: 'pending',
          progress: 0,
          details: [
            "🔄 Risk score: 23/100 (LOW)",
            "📊 Decision: Auto-approval",
            "🎯 Workflow: Payment processing",
            "📋 Route: Automated path",
            "⚡ Processing: Instant",
            "📈 Priority: Standard",
            "🕒 SLA: 24 hours",
            "✅ Decision routing complete"
          ],
          visualFeedback: [
            "🔄 Analyzing risk score...",
            "📊 Determining decision path...",
            "🎯 Selecting workflow...",
            "📋 Setting up routing...",
            "⚡ Configuring processing...",
            "📈 Setting priority level...",
            "🕒 Calculating SLA...",
            "✅ Decision routing successful!"
          ],
          duration: "0.2 seconds",
          icon: <FaArrowRight className="text-xl" />
        },
        {
          id: "3.8",
          name: "Approval Documentation",
          description: "Generating approval letters",
          status: 'pending',
          progress: 0,
          details: [
            "📝 Letter generation: Started",
            "📋 Template: Standard approval",
            "📊 Claim details: Included",
            "💰 Payment amount: ৳85,000",
            "📈 Processing time: 24 hours",
            "📱 Customer notification: Ready",
            "📄 Digital signature: Applied",
            "✅ Approval documentation complete"
          ],
          visualFeedback: [
            "📝 Starting letter generation...",
            "📋 Loading approval template...",
            "📊 Adding claim details...",
            "💰 Including payment amount...",
            "📈 Setting processing time...",
            "📱 Preparing notifications...",
            "📄 Applying digital signature...",
            "✅ Approval documentation successful!"
          ],
          duration: "0.4 seconds",
          icon: <FaFileAlt className="text-xl" />
        }
      ],
      technicalDetails: [
        "🧠 Decision Engine: Custom rule-based + ML hybrid system",
        "⚡ Auto-approval: Claims with risk score <30 (85% of cases)",
        "⚠️ Manual Review: Claims with risk score >70 (5% of cases)",
        "📊 Policy Engine: Natural language processing for policy interpretation",
        "💳 Payment API: Integration with 15+ banking systems",
        "📝 Document Generation: Dynamic PDF generation with company branding",
        "🔄 Workflow Engine: Apache Airflow for process orchestration",
        "📊 Real-time Monitoring: Grafana dashboards with 99.9% uptime"
      ],
      metrics: {
        accuracy: "98.9%",
        speed: "Instant",
        confidence: "94.7%"
      },
      duration: "Instant",
      progress: 0
    },
    {
      id: 4,
      title: "Human Review (if needed)",
      description: "Complex cases reviewed by insurance experts",
      icon: <FaEye className="text-2xl" />,
      status: 'pending',
      activities: [
        {
          id: "4.1",
          name: "Expert Claim Review",
          description: "Senior adjuster analysis",
          status: 'pending',
          progress: 0,
          details: [
            "👨‍💼 Senior adjuster: Not required",
            "📊 Experience: N/A (Auto-approved)",
            "🎯 Review type: Skipped",
            "📋 Risk score: 23/100 (LOW)",
            "✅ Decision: Auto-approved",
            "📈 Review time: 0 hours",
            "📝 Notes: No manual review needed",
            "✅ Expert review: SKIPPED"
          ],
          visualFeedback: [
            "👨‍💼 Checking if manual review needed...",
            "📊 Risk score analysis: 23/100",
            "🎯 Decision: Auto-approval threshold met",
            "📋 Skipping manual review process...",
            "✅ Auto-approval confirmed",
            "📈 Review time: 0 hours",
            "📝 Adding skip notes...",
            "✅ Expert review: SKIPPED"
          ],
          duration: "Instant",
          icon: <FaEye className="text-xl" />
        },
        {
          id: "4.2",
          name: "Complex Damage Assessment",
          description: "Detailed damage evaluation",
          status: 'pending',
          progress: 0,
          details: [
            "🔍 Damage type: Vehicle collision",
            "📊 Severity: Moderate damage",
            "💰 Estimated cost: ৳85,000",
            "📋 Photos analyzed: 8 images",
            "🎯 Assessment: Accurate",
            "📈 Market comparison: Within range",
            "🕒 Assessment time: 1 hour",
            "✅ Damage assessment complete"
          ],
          visualFeedback: [
            "🔍 Analyzing damage type...",
            "📊 Assessing damage severity...",
            "💰 Calculating estimated cost...",
            "📋 Reviewing damage photos...",
            "🎯 Validating assessment...",
            "📈 Comparing with market rates...",
            "🕒 Recording assessment time...",
            "✅ Damage assessment successful!"
          ],
          duration: "1 hour",
          icon: <FaFileImage className="text-xl" />
        },
        {
          id: "4.3",
          name: "Legal Compliance Check",
          description: "Regulatory requirement verification",
          status: 'pending',
          progress: 0,
          details: [
            "⚖️ Legal framework: Bangladesh Insurance Act",
            "📋 Compliance status: Compliant",
            "🎯 Regulatory requirements: Met",
            "📊 Documentation: Complete",
            "📈 Audit trail: Verified",
            "🕒 Compliance time: 0.3 hours",
            "📝 Legal notes: No issues",
            "✅ Legal compliance complete"
          ],
          visualFeedback: [
            "⚖️ Checking legal framework...",
            "📋 Verifying compliance status...",
            "🎯 Reviewing regulatory requirements...",
            "📊 Validating documentation...",
            "📈 Checking audit trail...",
            "🕒 Recording compliance time...",
            "📝 Adding legal notes...",
            "✅ Legal compliance successful!"
          ],
          duration: "0.3 hours",
          icon: <FaGavel className="text-xl" />
        },
        {
          id: "4.4",
          name: "Policy Interpretation",
          description: "Complex policy clause analysis",
          status: 'pending',
          progress: 0,
          details: [
            "📖 Policy type: Comprehensive Auto",
            "🔍 Coverage analysis: Full coverage",
            "📊 Deductible: ৳5,000 (paid)",
            "🎯 Claim eligibility: Eligible",
            "📈 Policy limits: Within range",
            "🕒 Policy period: Active",
            "📋 Exclusions: None applicable",
            "✅ Policy interpretation complete"
          ],
          visualFeedback: [
            "📖 Reading policy document...",
            "🔍 Analyzing coverage terms...",
            "📊 Checking deductible status...",
            "🎯 Verifying claim eligibility...",
            "📈 Validating policy limits...",
            "🕒 Checking policy period...",
            "📋 Reviewing exclusions...",
            "✅ Policy interpretation successful!"
          ],
          duration: "0.4 hours",
          icon: <FaFileAlt className="text-xl" />
        },
        {
          id: "4.5",
          name: "Final Decision Making",
          description: "Expert judgment and approval",
          status: 'pending',
          progress: 0,
          details: [
            "🎯 Final decision: APPROVED",
            "📊 Decision confidence: 97.8%",
            "💰 Approved amount: ৳85,000",
            "📋 Decision reason: Standard claim",
            "📈 Processing time: 24 hours",
            "🕒 Decision time: 0.2 hours",
            "📝 Decision notes: Auto-approved",
            "✅ Final decision complete"
          ],
          visualFeedback: [
            "🎯 Making final decision...",
            "📊 Calculating decision confidence...",
            "💰 Determining approved amount...",
            "📋 Recording decision reason...",
            "📈 Setting processing time...",
            "🕒 Recording decision time...",
            "📝 Adding decision notes...",
            "✅ Final decision successful!"
          ],
          duration: "0.2 hours",
          icon: <FaCheckCircle className="text-xl" />
        },
        {
          id: "4.6",
          name: "Documentation Review",
          description: "Ensuring complete file",
          status: 'pending',
          progress: 0,
          details: [
            "📋 Required documents: 8/8",
            "📊 Document quality: Excellent",
            "🎯 Completeness: 100%",
            "📈 Verification: All verified",
            "🕒 Review time: 0.1 hours",
            "📝 Quality score: 98.5%",
            "📄 Digital signatures: Applied",
            "✅ Documentation review complete"
          ],
          visualFeedback: [
            "📋 Checking required documents...",
            "📊 Assessing document quality...",
            "🎯 Verifying completeness...",
            "📈 Running verification checks...",
            "🕒 Recording review time...",
            "📝 Calculating quality score...",
            "📄 Applying digital signatures...",
            "✅ Documentation review successful!"
          ],
          duration: "0.1 hours",
          icon: <FaFileAlt className="text-xl" />
        },
        {
          id: "4.7",
          name: "Customer Communication",
          description: "Expert explanation if needed",
          status: 'pending',
          progress: 0,
          details: [
            "💬 Communication type: Auto-approval",
            "📱 Notification method: SMS + Email",
            "📊 Message template: Standard approval",
            "🎯 Customer response: Not required",
            "📈 Communication time: Instant",
            "🕒 Delivery status: Sent",
            "📝 Communication log: Recorded",
            "✅ Customer communication complete"
          ],
          visualFeedback: [
            "💬 Determining communication type...",
            "📱 Selecting notification method...",
            "📊 Loading message template...",
            "🎯 Checking customer response...",
            "📈 Sending notifications...",
            "🕒 Confirming delivery...",
            "📝 Recording communication log...",
            "✅ Customer communication successful!"
          ],
          duration: "Instant",
          icon: <FaUser className="text-xl" />
        },
        {
          id: "4.8",
          name: "Quality Assurance",
          description: "Final review before payment",
          status: 'pending',
          progress: 0,
          details: [
            "📊 QA score: 99.2%",
            "🎯 Quality check: PASSED",
            "📋 Process compliance: Verified",
            "📈 Accuracy verification: Confirmed",
            "🕒 QA time: 0.1 hours",
            "📝 QA notes: No issues",
            "📄 Final approval: Granted",
            "✅ Quality assurance complete"
          ],
          visualFeedback: [
            "📊 Running QA checks...",
            "🎯 Performing quality assessment...",
            "📋 Verifying process compliance...",
            "📈 Confirming accuracy...",
            "🕒 Recording QA time...",
            "📝 Adding QA notes...",
            "📄 Granting final approval...",
            "✅ Quality assurance successful!"
          ],
          duration: "0.1 hours",
          icon: <FaShieldAlt className="text-xl" />
        }
      ],
      technicalDetails: [
        "👥 Expert Team: Senior adjusters with 10+ years experience",
        "📋 Review Platform: Custom web interface with AI assistance",
        "⚖️ Legal Database: Integration with regulatory compliance systems",
        "📊 Decision Support: AI-powered recommendations for experts",
        "📱 Communication: Multi-channel customer notification system",
        "📈 Quality Metrics: 99.2% accuracy in expert reviews",
        "⏱️ SLA Compliance: 4-hour maximum review time",
        "📊 Audit Trail: Complete decision logging for compliance"
      ],
      metrics: {
        accuracy: "99.2%",
        speed: "2-4 hours",
        confidence: "97.8%"
      },
      duration: "2-4 hours",
      progress: 0
    },
    {
      id: 5,
      title: "Payment Processing",
      description: "Automated payment setup and customer notification",
      icon: <FaGavel className="text-2xl" />,
      status: 'pending',
      activities: [
        {
          id: "5.1",
          name: "Payment Processing Setup",
          description: "Bank transfer configuration",
          status: 'pending',
          progress: 0,
          details: [
            "💳 Payment method: Bank transfer",
            "🏦 Bank: Sonali Bank",
            "📊 Account verification: Confirmed",
            "💰 Transfer amount: ৳85,000",
            "📋 Processing fee: ৳0",
            "🎯 Transfer status: Initiated",
            "📈 Processing time: 24 hours",
            "✅ Payment setup complete"
          ],
          visualFeedback: [
            "💳 Selecting payment method...",
            "🏦 Verifying bank details...",
            "📊 Confirming account...",
            "💰 Calculating transfer amount...",
            "📋 Checking processing fees...",
            "🎯 Initiating transfer...",
            "📈 Setting processing time...",
            "✅ Payment setup successful!"
          ],
          duration: "Instant",
          icon: <FaMoneyBillWave className="text-xl" />
        },
        {
          id: "5.2",
          name: "Customer Notification",
          description: "SMS and email alerts",
          status: 'pending',
          progress: 0,
          details: [
            "📱 SMS notification: Sent",
            "📧 Email notification: Sent",
            "📊 Message template: Payment approved",
            "🎯 Delivery status: Delivered",
            "📈 Notification time: Instant",
            "🕒 Customer response: Not required",
            "📝 Notification log: Recorded",
            "✅ Customer notification complete"
          ],
          visualFeedback: [
            "📱 Sending SMS notification...",
            "📧 Sending email notification...",
            "📊 Loading message template...",
            "🎯 Confirming delivery...",
            "📈 Recording notification time...",
            "🕒 Checking customer response...",
            "📝 Logging notification...",
            "✅ Customer notification successful!"
          ],
          duration: "Instant",
          icon: <FaUser className="text-xl" />
        },
        {
          id: "5.3",
          name: "Claim Closure",
          description: "Final documentation completion",
          status: 'pending',
          progress: 0,
          details: [
            "📋 Claim status: Closed",
            "📊 Closure reason: Payment approved",
            "🎯 Final documentation: Complete",
            "📈 Processing time: 2.5 hours",
            "🕒 Closure time: Instant",
            "📝 Closure notes: Standard closure",
            "📄 Digital certificate: Generated",
            "✅ Claim closure complete"
          ],
          visualFeedback: [
            "📋 Updating claim status...",
            "📊 Recording closure reason...",
            "🎯 Completing final documentation...",
            "📈 Calculating processing time...",
            "🕒 Recording closure time...",
            "📝 Adding closure notes...",
            "📄 Generating digital certificate...",
            "✅ Claim closure successful!"
          ],
          duration: "Instant",
          icon: <FaCheckCircle className="text-xl" />
        },
        {
          id: "5.4",
          name: "Audit Trail Creation",
          description: "Complete transaction logging",
          status: 'pending',
          progress: 0,
          details: [
            "📊 Audit trail: Created",
            "🎯 Transaction log: Complete",
            "📋 Process steps: 40 activities logged",
            "📈 Data integrity: Verified",
            "🕒 Audit time: Instant",
            "📝 Audit notes: No issues",
            "📄 Digital signatures: Applied",
            "✅ Audit trail complete"
          ],
          visualFeedback: [
            "📊 Creating audit trail...",
            "🎯 Logging transactions...",
            "📋 Recording process steps...",
            "📈 Verifying data integrity...",
            "🕒 Recording audit time...",
            "📝 Adding audit notes...",
            "📄 Applying digital signatures...",
            "✅ Audit trail successful!"
          ],
          duration: "Instant",
          icon: <FaFileAlt className="text-xl" />
        },
        {
          id: "5.5",
          name: "Performance Metrics",
          description: "Processing time tracking",
          status: 'pending',
          progress: 0,
          details: [
            "📊 Total processing time: 2.5 hours",
            "🎯 SLA compliance: 24 hours (PASSED)",
            "📈 Efficiency score: 98.7%",
            "🕒 Average time: 2.3 hours",
            "📋 Quality score: 99.2%",
            "📄 Customer satisfaction: 95%",
            "📝 Performance log: Recorded",
            "✅ Performance metrics complete"
          ],
          visualFeedback: [
            "📊 Calculating processing time...",
            "🎯 Checking SLA compliance...",
            "📈 Computing efficiency score...",
            "🕒 Calculating average time...",
            "📋 Assessing quality score...",
            "📄 Measuring customer satisfaction...",
            "📝 Recording performance log...",
            "✅ Performance metrics successful!"
          ],
          duration: "Instant",
          icon: <FaChartLine className="text-xl" />
        },
        {
          id: "5.6",
          name: "Status Updates",
          description: "Real-time progress notifications",
          status: 'pending',
          progress: 0,
          details: [
            "🔔 Status update: Payment initiated",
            "📊 Update frequency: Real-time",
            "🎯 Notification channels: SMS, Email, App",
            "📈 Update count: 8 notifications",
            "🕒 Last update: Payment approved",
            "📋 Update log: Complete",
            "📄 Delivery confirmation: All sent",
            "✅ Status updates complete"
          ],
          visualFeedback: [
            "🔔 Sending status update...",
            "📊 Setting update frequency...",
            "🎯 Configuring notification channels...",
            "📈 Counting updates sent...",
            "🕒 Recording last update...",
            "📋 Logging update activity...",
            "📄 Confirming delivery...",
            "✅ Status updates successful!"
          ],
          duration: "Instant",
          icon: <FaClock className="text-xl" />
        },
        {
          id: "5.7",
          name: "Certificate Generation",
          description: "Payment certificates",
          status: 'pending',
          progress: 0,
          details: [
            "📄 Certificate type: Payment approval",
            "📊 Certificate number: PA-2024-001234",
            "🎯 Certificate status: Generated",
            "📋 Certificate details: Complete",
            "📈 Digital signature: Applied",
            "🕒 Generation time: Instant",
            "📝 Certificate log: Recorded",
            "✅ Certificate generation complete"
          ],
          visualFeedback: [
            "📄 Selecting certificate type...",
            "📊 Generating certificate number...",
            "🎯 Creating certificate content...",
            "📋 Adding certificate details...",
            "📈 Applying digital signature...",
            "🕒 Recording generation time...",
            "📝 Logging certificate...",
            "✅ Certificate generation successful!"
          ],
          duration: "Instant",
          icon: <FaFileAlt className="text-xl" />
        },
        {
          id: "5.8",
          name: "Data Archiving",
          description: "Secure long-term storage",
          status: 'pending',
          progress: 0,
          details: [
            "📦 Archive location: AWS S3",
            "📊 Data retention: 7 years",
            "🎯 Archive status: Completed",
            "📋 Data encryption: Applied",
            "📈 Backup copies: 3 locations",
            "🕒 Archive time: Instant",
            "📝 Archive log: Recorded",
            "✅ Data archiving complete"
          ],
          visualFeedback: [
            "📦 Selecting archive location...",
            "📊 Setting data retention...",
            "🎯 Initiating archive process...",
            "📋 Applying data encryption...",
            "📈 Creating backup copies...",
            "🕒 Recording archive time...",
            "📝 Logging archive activity...",
            "✅ Data archiving successful!"
          ],
          duration: "Instant",
          icon: <FaDownload className="text-xl" />
        }
      ],
      technicalDetails: [
        "🏦 Banking Integration: SWIFT + local payment gateways",
        "📱 Notification System: Twilio SMS + SendGrid email",
        "📊 Audit System: Blockchain-based immutable audit trail",
        "📈 Analytics: Real-time dashboard with processing metrics",
        "🔔 Real-time Updates: WebSocket connections for live status",
        "📄 Certificate Engine: Automated PDF generation with digital signatures",
        "📦 Storage: AWS S3 with 99.999999999% durability",
        "🔒 Security: SOC 2 Type II compliant data centers"
      ],
      metrics: {
        accuracy: "99.9%",
        speed: "Instant - 24 hours",
        confidence: "99.5%"
      },
      duration: "Instant - 24 hours",
      progress: 0
    }
  ];

  const startDemo = () => {
    setShowDemo(true);
    setUploadedDocuments(mockDocuments);
    setIsUploading(true);
    
    // Simulate document upload
    setTimeout(() => {
      setIsUploading(false);
      setProcessSteps(initialProcessSteps);
      runProcessStep(0);
    }, 3000);
  };

  const runActivity = (stepIndex: number, activityIndex: number) => {
    console.log(`Running activity ${activityIndex} in step ${stepIndex}`);
    
    if (stepIndex >= initialProcessSteps.length) {
      console.log('Demo completed!');
      return;
    }
    
    // Check if we've completed all activities in this step
    if (activityIndex >= initialProcessSteps[stepIndex].activities.length) {
      console.log(`Step ${stepIndex} completed, moving to step ${stepIndex + 1}`);
      
      // Mark current step as completed
      setProcessSteps(prev => {
        const newSteps = [...prev];
        newSteps[stepIndex].status = 'completed';
        newSteps[stepIndex].progress = 100;
        return newSteps;
      });
      
      // Move to next step
      setTimeout(() => {
        if (stepIndex + 1 < initialProcessSteps.length) {
          runProcessStep(stepIndex + 1);
        } else {
          console.log('All steps completed!');
          setDemoCompleted(true);
          setShowResultModal(true);
        }
      }, 3500); // Slower step transition for comprehensive demo
      return;
    }

    const currentActivity = initialProcessSteps[stepIndex].activities[activityIndex];
    console.log(`Starting activity: ${currentActivity.name}`);
    
    setCurrentVisualFeedback(currentActivity.visualFeedback);
    setCurrentFeedbackIndex(0);

    // Update activity status
    setProcessSteps(prev => {
      const newSteps = [...prev];
      newSteps[stepIndex].activities[activityIndex].status = 'active';
      newSteps[stepIndex].activities[activityIndex].progress = 0;
      return newSteps;
    });

    const feedbackInterval: NodeJS.Timeout = setInterval(() => {
      setCurrentFeedbackIndex(prev => {
        if (prev < currentActivity.visualFeedback.length - 1) {
          return prev + 1;
        } else {
          clearInterval(feedbackInterval);
          return prev;
        }
      });
    }, 500); // Slower feedback updates for comprehensive demo

    const progressInterval: NodeJS.Timeout = setInterval(() => {
      setProcessSteps(prev => {
        const newSteps = [...prev];
        if (newSteps[stepIndex] && newSteps[stepIndex].activities[activityIndex]) {
          if (newSteps[stepIndex].activities[activityIndex].progress < 100) {
            newSteps[stepIndex].activities[activityIndex].progress += 6; // Even slower for comprehensive demo
          } else {
            console.log(`Activity ${activityIndex} completed, moving to next`);
            newSteps[stepIndex].activities[activityIndex].status = 'completed';
            clearInterval(progressInterval);
            clearInterval(feedbackInterval);
            clearTimeout(activityTimeout);
            
            // Move to next activity with longer delay for comprehensive demo
            setTimeout(() => {
              runActivity(stepIndex, activityIndex + 1);
            }, 1200); // 1.2 second delay between activities
          }
        }
        return newSteps;
      });
    }, 600); // Slower interval for comprehensive demo

    // Add a timeout to prevent infinite processing
    const activityTimeout: NodeJS.Timeout = setTimeout(() => {
      console.log(`Activity ${activityIndex} timed out, forcing completion`);
      clearInterval(feedbackInterval);
      clearInterval(progressInterval);
      setProcessSteps(prev => {
        const newSteps = [...prev];
        if (newSteps[stepIndex] && newSteps[stepIndex].activities[activityIndex]) {
          newSteps[stepIndex].activities[activityIndex].status = 'completed';
          newSteps[stepIndex].activities[activityIndex].progress = 100;
        }
        return newSteps;
      });
      setTimeout(() => {
        runActivity(stepIndex, activityIndex + 1);
      }, 800);
    }, 25000); // 25 second timeout for comprehensive demo
  };

  const runProcessStep = (step: number) => {
    console.log(`Starting step ${step}`);
    
    if (step >= initialProcessSteps.length) {
      console.log('No more steps to run');
      return;
    }

    // Use initialProcessSteps instead of processSteps to avoid undefined
    const updatedSteps = [...initialProcessSteps];
    updatedSteps[step].status = 'active';
    updatedSteps[step].progress = 0;
    
    // Reset all activities in this step to pending
    updatedSteps[step].activities.forEach(activity => {
      activity.status = 'pending';
      activity.progress = 0;
    });
    
    setProcessSteps(updatedSteps);
    setCurrentStep(step);

    console.log(`Step ${step} initialized, starting first activity`);
    
    // Start with first activity of this step
    setTimeout(() => {
      runActivity(step, 0);
    }, 1000); // Slower start for comprehensive demo
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-900';
      case 'active': return 'text-cyan-400 bg-cyan-900';
      case 'pending': return 'text-gray-400 bg-gray-900';
      default: return 'text-gray-400 bg-gray-900';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <FaCheckCircle className="text-green-400" />;
      case 'active': return <FaClock className="text-cyan-400 animate-spin" />;
      case 'pending': return <FaClock className="text-gray-400" />;
      default: return <FaClock className="text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Header */}
      <div className="bg-[#1a1a1a] border-b border-[#333]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/solutions/claims-automation" className="text-cyan-400 hover:text-cyan-300">
              ← Back to Claims Automation
            </Link>
            <h1 className="text-2xl font-bold text-white">Claims Processing Demo</h1>
            <div className="text-sm text-gray-400">For Top Insurance Companies</div>
          </div>
        </div>
      </div>

      {!showDemo ? (
        // Demo Introduction
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-cyan-300">
              🚀 Enterprise Claims Automation Demo
            </h2>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8">
              Experience the future of insurance claims processing for top companies
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Watch as AI processes a real auto insurance claim from document upload to payment approval
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-400 mb-4">
              <span className="flex items-center gap-2">⚡ Real-time Processing</span>
              <span className="flex items-center gap-2">🔒 Enterprise Security</span>
              <span className="flex items-center gap-2">📊 Advanced Analytics</span>
              <span className="flex items-center gap-2">🤖 AI-Powered Decisions</span>
            </div>
          </div>

          {/* Demo Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <FaUpload className="text-4xl text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Document Upload</h3>
              <p className="text-gray-300">Upload policy documents, claim forms, photos, and reports</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <TbRobot className="text-4xl text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">AI Processing</h3>
              <p className="text-gray-300">Real-time document analysis and risk assessment</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <FaShieldAlt className="text-4xl text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Fraud Detection</h3>
              <p className="text-gray-300">Advanced AI algorithms detect suspicious patterns</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <FaCheckCircle className="text-4xl text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Instant Decision</h3>
              <p className="text-gray-300">Automated approval or expert review routing</p>
            </div>
          </div>

          {/* Start Demo Button */}
          <div className="text-center">
            <button 
              onClick={startDemo}
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-12 py-6 rounded-lg font-bold text-xl transition-all duration-200 flex items-center gap-4 mx-auto"
            >
              <FaPlay className="text-2xl" />
              Start Interactive Demo
            </button>
            <p className="text-gray-400 mt-4">Experience the complete claims processing workflow</p>
            
            {/* Enterprise Statistics */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">40+</div>
                <div className="text-sm text-gray-400">AI Activities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">99.7%</div>
                <div className="text-sm text-gray-400">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">2.5hr</div>
                <div className="text-sm text-gray-400">Processing Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">৳85K</div>
                <div className="text-sm text-gray-400">Claim Amount</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Interactive Demo
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Demo Header */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h4 className="text-cyan-400 font-semibold">Claim Number</h4>
                <p className="text-white text-lg">CLM-2024-DEMO-001</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-semibold">Customer</h4>
                <p className="text-white text-lg">Ahmed Rahman</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-semibold">Claim Type</h4>
                <p className="text-white text-lg capitalize">Auto Insurance</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-semibold">Amount</h4>
                <p className="text-white text-lg">৳85,000</p>
              </div>
            </div>
          </div>

          {/* Document Upload Section */}
          {isUploading && (
            <div className="bg-[#1a1a1a] rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">📁 Uploading Documents...</h3>
              <div className="space-y-4">
                {uploadedDocuments.map((doc) => (
                  <div key={doc.id} className="bg-[#0a0a0a] rounded-lg p-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-2xl">{doc.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-white">{doc.name}</div>
                        <div className="text-sm text-gray-400">{doc.fileSize}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-yellow-400 animate-spin" />
                        <span className="text-yellow-400 text-sm">Processing...</span>
                      </div>
                    </div>
                    
                    {/* AI Insights */}
                    <div className="mt-3 pl-8">
                      <h4 className="text-cyan-400 font-semibold text-sm mb-2">🤖 AI Extracted Information:</h4>
                      <div className="space-y-1">
                        {doc.aiInsights.map((insight, idx) => (
                          <div key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{insight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Process Steps */}
          {processSteps.length > 0 && (
            <div className="space-y-6">
              {processSteps.map((step) => (
                <div key={step.id} className={`bg-[#1a1a1a] rounded-2xl p-6 transition-all duration-500 ${
                  step.status === 'active' ? 'ring-2 ring-cyan-400 bg-[#0a2a3a]' : ''
                }`}>
                  <div className="flex items-start gap-6">
                    {/* Step Number */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                      step.status === 'completed' ? 'bg-green-500 text-black' :
                      step.status === 'active' ? 'bg-cyan-500 text-black animate-pulse' :
                      'bg-gray-600 text-white'
                    }`}>
                      {step.id}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="text-cyan-400">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                          <p className="text-gray-300">{step.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(step.status)}
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(step.status)}`}>
                            {step.status.toUpperCase()}
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      {step.status === 'active' && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-cyan-400">Processing...</span>
                            <span className="text-white">{step.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-cyan-400 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${step.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}

                      {/* Current Activity Details */}
                      <div className="mt-4">
                        <h4 className="font-semibold text-cyan-300 mb-2">🔍 Current Activity Details:</h4>
                        {step.activities && step.activities.map((activity) => (
                          <div key={activity.id} className={`mb-3 p-3 rounded-lg ${
                            activity.status === 'active' ? 'bg-cyan-900 bg-opacity-30 border border-cyan-400' :
                            activity.status === 'completed' ? 'bg-green-900 bg-opacity-30 border border-green-400' :
                            'bg-gray-800 border border-gray-600'
                          }`}>
                            <div className="flex items-center gap-3 mb-2">
                              <div className="text-cyan-400">{activity.icon}</div>
                              <div className="flex-1">
                                <h5 className="font-semibold text-white">{activity.name}</h5>
                                <p className="text-sm text-gray-300">{activity.description}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                {activity.status === 'completed' && <FaCheckCircle className="text-green-400" />}
                                {activity.status === 'active' && <FaClock className="text-cyan-400 animate-spin" />}
                                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                  activity.status === 'completed' ? 'bg-green-600 text-white' :
                                  activity.status === 'active' ? 'bg-cyan-600 text-white' :
                                  'bg-gray-600 text-gray-300'
                                }`}>
                                  {activity.status.toUpperCase()}
                                </span>
                              </div>
                            </div>

                            {/* Progress Bar */}
                            {activity.status === 'active' && (
                              <div className="mb-3">
                                <div className="flex justify-between text-xs mb-1">
                                  <span className="text-cyan-400">Processing...</span>
                                  <span className="text-white">{Math.round(activity.progress)}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-1">
                                  <div 
                                    className="bg-cyan-400 h-1 rounded-full transition-all duration-300"
                                    style={{ width: `${activity.progress}%` }}
                                  ></div>
                                </div>
                              </div>
                            )}

                            {/* Visual Feedback */}
                            {activity.status === 'active' && currentVisualFeedback.length > 0 && (
                              <div className="mb-3">
                                <h6 className="text-purple-300 font-semibold text-xs mb-2">🔄 Live Processing:</h6>
                                <div className="bg-black bg-opacity-50 rounded p-2">
                                  <div className="text-xs text-cyan-300 font-mono">
                                    {currentVisualFeedback.slice(0, currentFeedbackIndex + 1).map((feedback, idx) => (
                                      <div key={idx} className={`${
                                        idx === currentFeedbackIndex ? 'text-yellow-300 animate-pulse' : 'text-cyan-300'
                                      }`}>
                                        {feedback}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}

                                                         {/* Activity Details */}
                             <div className="mt-3">
                               <h6 className="text-gray-300 font-semibold text-xs mb-2">📋 Results:</h6>
                               <ul className="space-y-1 text-xs text-gray-300">
                                 {activity.details.map((detail, detailIdx) => {
                                   // Only show results that have been "processed" based on progress
                                   const shouldShow = activity.status === 'completed' || 
                                     (activity.status === 'active' && 
                                      activity.progress >= (detailIdx + 1) * (100 / activity.details.length));
                                   
                                   return shouldShow ? (
                                     <li key={detailIdx} className="flex items-start gap-2">
                                       <div className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${
                                         activity.status === 'completed' ? 'bg-green-400' :
                                         activity.status === 'active' ? 'bg-cyan-400' :
                                         'bg-gray-400'
                                       }`}></div>
                                       <span>{detail}</span>
                                     </li>
                                   ) : (
                                     <li key={detailIdx} className="flex items-start gap-2">
                                       <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0 bg-gray-600"></div>
                                       <span className="text-gray-500">Processing...</span>
                                     </li>
                                   );
                                 })}
                               </ul>
                             </div>
                          </div>
                        ))}
                      </div>

                      {/* Technical Details */}
                      {step.technicalDetails && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-purple-300 mb-2">🔧 Technical Infrastructure:</h4>
                          <ul className="space-y-1 text-sm text-gray-300">
                            {step.technicalDetails.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                                  step.status === 'completed' ? 'bg-purple-400' :
                                  step.status === 'active' ? 'bg-purple-400 animate-pulse' :
                                  'bg-gray-400'
                                }`}></div>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Performance Metrics */}
                      {step.metrics && (
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className="bg-[#0a0a0a] rounded-lg p-3">
                            <span className="text-cyan-400 font-semibold text-xs">🎯 Accuracy</span>
                            <p className="text-white text-lg">{step.metrics.accuracy}</p>
                          </div>
                          <div className="bg-[#0a0a0a] rounded-lg p-3">
                            <span className="text-cyan-400 font-semibold text-xs">⚡ Speed</span>
                            <p className="text-white text-lg">{step.metrics.speed}</p>
                          </div>
                          <div className="bg-[#0a0a0a] rounded-lg p-3">
                            <span className="text-cyan-400 font-semibold text-xs">🤖 Confidence</span>
                            <p className="text-white text-lg">{step.metrics.confidence}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Final Results */}
          {currentStep >= processSteps.length && processSteps.length > 0 && (
            <div className="mt-8 bg-green-900 bg-opacity-20 border border-green-400 rounded-2xl p-8">
              <div className="text-center">
                <FaCheckCircle className="text-green-400 text-5xl mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Claim Processed Successfully!</h3>
                <p className="text-green-300 text-lg mb-6">The AI has completed processing the claim in under 5 minutes</p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-[#0a0a0a] rounded-lg p-4">
                    <span className="text-cyan-400 font-semibold text-sm">⏱️ Processing Time</span>
                    <p className="text-white text-xl">4.2 minutes</p>
                    <p className="text-gray-400 text-xs">vs 2-3 days manual</p>
                  </div>
                  <div className="bg-[#0a0a0a] rounded-lg p-4">
                    <span className="text-cyan-400 font-semibold text-sm">🤖 AI Confidence</span>
                    <p className="text-white text-xl">94.7%</p>
                    <p className="text-gray-400 text-xs">High confidence score</p>
                  </div>
                  <div className="bg-[#0a0a0a] rounded-lg p-4">
                    <span className="text-cyan-400 font-semibold text-sm">🎯 Risk Score</span>
                    <p className="text-green-400 text-xl">Low (23/100)</p>
                    <p className="text-gray-400 text-xs">Auto-approval threshold</p>
                  </div>
                  <div className="bg-[#0a0a0a] rounded-lg p-4">
                    <span className="text-cyan-400 font-semibold text-sm">✅ Decision</span>
                    <p className="text-green-400 text-xl">Auto-Approved</p>
                    <p className="text-gray-400 text-xs">Instant processing</p>
                  </div>
                </div>

                {/* Final Claim Decision */}
                {demoCompleted && (
                  <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-lg p-8 mb-6 border border-green-400">
                    <div className="text-center">
                      <div className="text-6xl mb-4">✅</div>
                      <h3 className="text-3xl font-bold text-green-400 mb-2">CLAIM APPROVED</h3>
                      <p className="text-green-200 text-lg mb-4">Your insurance claim has been successfully processed and approved!</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-green-800 bg-opacity-50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-green-300">৳85,000</div>
                          <div className="text-green-200 text-sm">Approved Amount</div>
                        </div>
                        <div className="bg-green-800 bg-opacity-50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-green-300">2.5 hours</div>
                          <div className="text-green-200 text-sm">Processing Time</div>
                        </div>
                        <div className="bg-green-800 bg-opacity-50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-green-300">94.7%</div>
                          <div className="text-green-200 text-sm">AI Confidence</div>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-green-900 bg-opacity-30 rounded-lg">
                        <h4 className="text-green-300 font-semibold mb-2">📋 Claim Summary:</h4>
                        <ul className="text-green-200 text-sm space-y-1">
                          <li>• Policy: Comprehensive Auto Insurance</li>
                          <li>• Claim Type: Vehicle Collision</li>
                          <li>• Risk Score: 23/100 (LOW)</li>
                          <li>• Decision: Auto-approved (no manual review needed)</li>
                          <li>• Payment Method: Bank transfer (24 hours)</li>
                          <li>• Status: Payment processing initiated</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-[#0a0a0a] rounded-lg p-6">
                  <h4 className="text-cyan-400 font-semibold mb-4">🎯 Complete Process Overview (40 Activities):</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h5 className="text-purple-400 font-semibold mb-2">Step 1: Document Processing (8 activities)</h5>
                      <ul className="space-y-1 text-gray-300 text-xs">
                        <li>• OCR text extraction (99.2% accuracy)</li>
                        <li>• Security scanning & malware detection</li>
                        <li>• Policy database cross-referencing</li>
                        <li>• AI image analysis for damage assessment</li>
                        <li>• Data extraction & validation</li>
                        <li>• Document authenticity verification</li>
                        <li>• Quality assessment & resolution check</li>
                        <li>• Format validation & compatibility</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-purple-400 font-semibold mb-2">Step 2: AI Risk Assessment (8 activities)</h5>
                      <ul className="space-y-1 text-gray-300 text-xs">
                        <li>• Historical pattern analysis (2M+ claims)</li>
                        <li>• Fraud detection algorithms (95% precision)</li>
                        <li>• Risk scoring calculation (0-100 scale)</li>
                        <li>• Claim amount validation & verification</li>
                        <li>• Policy compliance & coverage check</li>
                        <li>• Temporal analysis & timing patterns</li>
                        <li>• Geographic risk assessment</li>
                        <li>• Customer behavior analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-purple-400 font-semibold mb-2">Step 3: Decision Engine (8 activities)</h5>
                      <ul className="space-y-1 text-gray-300 text-xs">
                        <li>• Auto-approval for low-risk claims (&lt;30 score)</li>
                        <li>• Manual review flagging (&gt;70 score)</li>
                        <li>• Policy interpretation & understanding</li>
                        <li>• Coverage verification & limits check</li>
                        <li>• Payment calculation & determination</li>
                        <li>• Confidence scoring & assessment</li>
                        <li>• Decision routing & workflow</li>
                        <li>• Approval documentation generation</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-purple-400 font-semibold mb-2">Step 4: Human Review (8 activities)</h5>
                      <ul className="space-y-1 text-gray-300 text-xs">
                        <li>• Expert claim review (senior adjusters)</li>
                        <li>• Complex damage assessment</li>
                        <li>• Legal compliance verification</li>
                        <li>• Policy clause interpretation</li>
                        <li>• Final decision making</li>
                        <li>• Documentation review & completion</li>
                        <li>• Customer communication</li>
                        <li>• Quality assurance & final review</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="text-purple-400 font-semibold mb-2">Step 5: Payment Processing (8 activities)</h5>
                    <ul className="space-y-1 text-gray-300 text-xs grid grid-cols-1 md:grid-cols-2 gap-4">
                      <li>• Payment processing setup & configuration</li>
                      <li>• Customer notification (SMS/email)</li>
                      <li>• Claim closure & documentation</li>
                      <li>• Audit trail creation & logging</li>
                      <li>• Performance metrics tracking</li>
                      <li>• Real-time status updates</li>
                      <li>• Certificate generation</li>
                      <li>• Data archiving & storage</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#0a0a0a] rounded-lg p-6 mt-6">
                  <h4 className="text-cyan-400 font-semibold mb-4">🚀 Enterprise Benefits for Top Insurance Companies:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <ul className="space-y-2 text-gray-300">
                      <li>• 85% faster processing time (4.2 min vs 2-3 days)</li>
                      <li>• 99.7% accuracy rate across all activities</li>
                      <li>• Reduced manual workload by 90%</li>
                      <li>• 24/7 automated processing capability</li>
                      <li>• 40 detailed activities automated</li>
                    </ul>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Advanced fraud detection (95% precision)</li>
                      <li>• Real-time risk assessment (&lt;500ms)</li>
                      <li>• Improved customer satisfaction (instant updates)</li>
                      <li>• Cost-effective operations (60% cost reduction)</li>
                      <li>• Enterprise-grade security (SOC 2 compliant)</li>
                    </ul>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Scalable to 10,000+ claims per day</li>
                      <li>• Multi-language support (Bengali, English)</li>
                      <li>• Integration with existing systems</li>
                      <li>• Real-time analytics dashboard</li>
                      <li>• Regulatory compliance (Bangladesh Bank)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Result Modal */}
      {showResultModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 rounded-2xl p-8 max-w-2xl mx-4 border-2 border-green-400 shadow-2xl">
            <div className="text-center">
              {/* Success Animation */}
              <div className="mb-6">
                <div className="text-8xl mb-4 animate-bounce">✅</div>
                <div className="text-6xl font-bold text-green-300 mb-2 animate-pulse">CLAIM APPROVED</div>
                <div className="text-green-200 text-xl">Your insurance claim has been successfully processed!</div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-800 bg-opacity-50 rounded-xl p-4 border border-green-400">
                  <div className="text-3xl font-bold text-green-300">৳85,000</div>
                  <div className="text-green-200 text-sm">Approved Amount</div>
                </div>
                <div className="bg-green-800 bg-opacity-50 rounded-xl p-4 border border-green-400">
                  <div className="text-3xl font-bold text-green-300">2.5 hours</div>
                  <div className="text-green-200 text-sm">Processing Time</div>
                </div>
                <div className="bg-green-800 bg-opacity-50 rounded-xl p-4 border border-green-400">
                  <div className="text-3xl font-bold text-green-300">94.7%</div>
                  <div className="text-green-200 text-sm">AI Confidence</div>
                </div>
              </div>

              {/* Claim Details */}
              <div className="bg-green-900 bg-opacity-30 rounded-xl p-6 mb-6 border border-green-400">
                <h4 className="text-green-300 font-semibold mb-3 text-lg">📋 Claim Summary</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-green-200">
                  <div>• Policy: Comprehensive Auto Insurance</div>
                  <div>• Claim Type: Vehicle Collision</div>
                  <div>• Risk Score: 23/100 (LOW)</div>
                  <div>• Decision: Auto-approved</div>
                  <div>• Payment Method: Bank transfer</div>
                  <div>• Status: Payment processing</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => setShowResultModal(false)}
                  className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowResultModal(false);
                    setDemoCompleted(false);
                    setShowDemo(false);
                    setProcessSteps([]);
                    setCurrentStep(0);
                    setCurrentVisualFeedback([]);
                    setCurrentFeedbackIndex(0);
                  }}
                  className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Run Demo Again
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 