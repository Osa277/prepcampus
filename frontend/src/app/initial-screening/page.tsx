'use client';

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";

interface Question {
  id: number;
  question: string;
  tip: string;
  category: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Tell us about yourself and give an overview of your educational background and key qualifications?",
    tip: "Be clear, maintain eye contact, use good lighting, and give specific answers. Experience unlocks badges for great answers!",
    category: "Personal Introduction"
  },
  {
    id: 2,
    question: "What motivates you to work in technology, and what are your career aspirations?",
    tip: "Show genuine passion for technology and demonstrate clear career goals. Mention specific technologies or fields that interest you.",
    category: "Career Goals"
  }
];

export default function InitialScreening() {
  const { user } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordedVideoUrl, setRecordedVideoUrl] = useState<string | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissions, setSubmissions] = useState<Record<number, string>>({});
  const [searchQuery, setSearchQuery] = useState("");
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);

  // Initialize webcam
  useEffect(() => {
    initializeCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
      }
    };
  }, []);

  const initializeCamera = async () => {
    try {
      console.log('Initializing camera...');
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
        audio: true
      });
      console.log('Camera initialized successfully');
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Error accessing camera. Please ensure you have granted camera permissions and try refreshing the page.');
    }
  };

  const startRecording = () => {
    console.log('Start recording clicked');
    console.log('Stream available:', !!stream);
    
    if (!stream) {
      console.error('No stream available');
      alert('Camera not initialized. Please refresh the page and grant camera permissions.');
      return;
    }

    // Try different codec options for better browser compatibility
    let mediaRecorder;
    try {
      mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=vp9'
      });
      console.log('MediaRecorder created with vp9 codec');
    } catch (e) {
      console.log('vp9 codec not supported, trying basic webm');
      try {
        mediaRecorder = new MediaRecorder(stream, {
          mimeType: 'video/webm'
        });
        console.log('MediaRecorder created with basic webm');
      } catch (e2) {
        console.log('webm not supported, using default');
        mediaRecorder = new MediaRecorder(stream);
        console.log('MediaRecorder created with default settings');
      }
    }

    mediaRecorderRef.current = mediaRecorder;
    recordedChunksRef.current = [];
    setRecordedVideoUrl(null);

    mediaRecorder.ondataavailable = (event) => {
      console.log('Data available:', event.data.size);
      if (event.data.size > 0) {
        recordedChunksRef.current.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      console.log('Recording stopped, chunks:', recordedChunksRef.current.length);
      const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      setRecordedVideoUrl(url);
    };

    mediaRecorder.onstart = () => {
      console.log('Recording started');
    };

    mediaRecorder.onerror = (error) => {
      console.error('MediaRecorder error:', error);
    };

    try {
      mediaRecorder.start(1000);
      setIsRecording(true);
      setIsPaused(false);
      setRecordingTime(0);

      recordingIntervalRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
      
      console.log('Recording started successfully');
    } catch (error) {
      console.error('Error starting recording:', error);
      alert('Error starting recording. Please try again.');
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && isRecording && !isPaused) {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
      }
    }
  };

  const resumeRecording = () => {
    if (mediaRecorderRef.current && isRecording && isPaused) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
      recordingIntervalRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
      }
    }
  };

  const reRecord = () => {
    setRecordedVideoUrl(null);
    recordedChunksRef.current = [];
    setRecordingTime(0);
    setIsSubmitted(false);
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  };

  const submitAnswer = () => {
    if (recordedVideoUrl) {
      setSubmissions(prev => ({
        ...prev,
        [questions[currentQuestion].id]: recordedVideoUrl
      }));
      setIsSubmitted(true);
      alert(`Answer for Question ${currentQuestion + 1} submitted successfully!`);
    } else {
      alert('Please record an answer before submitting.');
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      reRecord();
      setIsSubmitted(false);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      reRecord();
      setIsSubmitted(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQ = questions[currentQuestion];

  return (
    <main className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-72 bg-blue-600 text-white flex flex-col p-6">
        <Link href="/" className="font-bold text-xl mb-8 flex items-center space-x-2 hover:opacity-80 transition">
          <span className="text-2xl">🎯</span>
          <span>PrepCampus</span>
        </Link>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Main Menu</div>
        <nav className="flex-1 space-y-1 mb-6">
          <Link href="/dashboard" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🏠</span> Dashboard
          </Link>
          <Link href="/initial-screening" className="flex items-center gap-2 py-2 px-4 rounded bg-blue-700">
            <span>📝</span> Initial Screening
          </Link>
          <Link href="/technical-interview" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>💻</span> Technical Interview
          </Link>
          <Link href="/behavioral-interview" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>💬</span> Behavioral Interview
          </Link>
          <Link href="/deep-dive-interview" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🔎</span> Deep Dive Interview
          </Link>
          <Link href="/mock-interview" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🎤</span> Mock Interview 
            <span className="ml-2 text-xs bg-white text-blue-600 px-2 py-0.5 rounded">Premium</span>
          </Link>
        </nav>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Rewards Summary</div>
        <div className="mb-6 space-y-1">
          <Link href="/points" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>⭐</span> Points Earned
          </Link>
          <Link href="/certificates" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🎓</span> Certificates
          </Link>
        </div>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Account Management</div>
        <div className="mb-6 space-y-1">
          <Link href="/support" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🛟</span> Support
          </Link>
          <Link href="/settings" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>⚙️</span> Settings
          </Link>
        </div>
        <div className="mt-auto flex items-center space-x-2 pt-6 border-t border-blue-400">
          <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center font-semibold">
            {user?.firstName?.[0]?.toUpperCase() || 'U'}
          </div>
          <div>
            <div className="font-semibold">{user ? `${user.firstName} ${user.lastName}` : 'User'}</div>
            <div className="text-xs">Initial Screening</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-1 bg-gray-50 p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Initial Screening: Level 1</h1>
            <p className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search anything here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-600">
                Progress: {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </div>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Question Panel */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-gray-700">Question {currentQ.id}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
                  {currentQ.category}
                </span>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">
                {currentQ.question}
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-400">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">💡</span>
                <div>
                  <span className="font-semibold text-blue-800">Tip:</span>
                  <p className="text-sm text-blue-700 mt-1">{currentQ.tip}</p>
                </div>
              </div>
            </div>

            {/* Recording Controls */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                {!isRecording && !recordedVideoUrl && (
                  <button 
                    onClick={startRecording}
                    className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                    Record
                  </button>
                )}

                {isRecording && !isPaused && (
                  <button 
                    onClick={pauseRecording}
                    className="flex items-center gap-2 px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
                  >
                    <span>⏸️</span>
                    Pause
                  </button>
                )}

                {isRecording && isPaused && (
                  <button 
                    onClick={resumeRecording}
                    className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    <span>▶️</span>
                    Resume
                  </button>
                )}

                {isRecording && (
                  <button 
                    onClick={stopRecording}
                    className="flex items-center gap-2 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                  >
                    <span>⏹️</span>
                    Stop
                  </button>
                )}

                {recordedVideoUrl && (
                  <>
                    <button 
                      onClick={() => {
                        const video = document.createElement('video');
                        video.src = recordedVideoUrl;
                        video.controls = true;
                        video.style.width = '100%';
                        video.style.maxWidth = '500px';
                        const modal = document.createElement('div');
                        modal.style.position = 'fixed';
                        modal.style.top = '0';
                        modal.style.left = '0';
                        modal.style.width = '100%';
                        modal.style.height = '100%';
                        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
                        modal.style.display = 'flex';
                        modal.style.justifyContent = 'center';
                        modal.style.alignItems = 'center';
                        modal.style.zIndex = '1000';
                        modal.appendChild(video);
                        modal.onclick = () => document.body.removeChild(modal);
                        document.body.appendChild(modal);
                      }}
                      className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      <span>▶️</span>
                      Playback
                    </button>
                    <button 
                      onClick={reRecord}
                      className="flex items-center gap-2 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                    >
                      <span>🔄</span>
                      Re-record
                    </button>
                  </>
                )}

                {recordedVideoUrl && !isSubmitted && (
                  <button 
                    onClick={submitAnswer}
                    className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    <span>✅</span>
                    Submit
                  </button>
                )}
              </div>

              {/* Recording Timer */}
              {isRecording && (
                <div className="flex items-center gap-2 text-red-600 font-mono">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                  <span>Recording: {formatTime(recordingTime)}</span>
                  {isPaused && <span className="text-yellow-600">(Paused)</span>}
                </div>
              )}

              {/* Question Status */}
              <div className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
                {isSubmitted && <span className="ml-2 text-green-600">✅ Submitted</span>}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t">
                <button 
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>←</span>
                  Previous
                </button>

                <div className="flex items-center gap-2">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentQuestion 
                          ? 'bg-blue-600' 
                          : submissions[questions[index].id]
                          ? 'bg-green-500'
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextQuestion}
                  disabled={currentQuestion === questions.length - 1}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Video Panel */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <span>📹</span>
              {recordedVideoUrl ? 'Recorded Answer' : 'Live Camera'}
            </h3>
            
            <div className="relative">
              {!recordedVideoUrl ? (
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  className="w-full h-80 bg-gray-900 rounded-lg object-cover"
                  style={{ transform: 'scaleX(-1)' }}
                />
              ) : (
                <video
                  src={recordedVideoUrl}
                  controls
                  className="w-full h-80 bg-gray-900 rounded-lg object-cover"
                />
              )}
              
              {/* Recording Indicator */}
              {isRecording && (
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  REC
                </div>
              )}

              {/* Status Overlays */}
              {!stream && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center text-white rounded-lg">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📷</div>
                    <p>Initializing camera...</p>
                  </div>
                </div>
              )}

              {isSubmitted && (
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <span>✅</span>
                  Submitted
                </div>
              )}
            </div>

            {/* Recording Stats */}
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-medium text-gray-700">Recording Time</div>
                <div className="text-lg font-mono text-blue-600">{formatTime(recordingTime)}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-medium text-gray-700">Status</div>
                <div className="text-lg">
                  {isRecording ? (
                    <span className="text-red-600">🔴 Recording</span>
                  ) : recordedVideoUrl ? (
                    <span className="text-green-600">✅ Ready</span>
                  ) : (
                    <span className="text-gray-600">⏸️ Stopped</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Completion Summary */}
        {Object.keys(submissions).length === questions.length && (
          <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎉</span>
              <h3 className="text-lg font-semibold text-green-800">Initial Screening Complete!</h3>
            </div>
            <p className="text-green-700 mb-4">
              Congratulations! You have successfully completed all {questions.length} initial screening questions. 
              Your responses have been recorded and will be reviewed by our team.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Return to Dashboard
              </Link>
              <Link href="/technical-interview" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Continue to Technical Interview
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}