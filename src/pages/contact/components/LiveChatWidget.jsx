import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
  {
    id: 1,
    sender: 'support',
    name: 'Sarah Chen',
    avatar: "https://images.unsplash.com/photo-1560859389-c4fb2bd88016",
    avatarAlt: 'Professional headshot of Asian woman with shoulder-length black hair in white blouse',
    message: 'Hi! I\'m Sarah from Cognito Education support. How can I help you today?',
    timestamp: new Date(Date.now() - 300000)
  }]
  );

  const supportAgents = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Learning Specialist',
    avatar: "https://images.unsplash.com/photo-1560859389-c4fb2bd88016",
    avatarAlt: 'Professional headshot of Asian woman with shoulder-length black hair in white blouse',
    status: 'online'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Technical Support',
    avatar: "https://images.unsplash.com/photo-1588178457501-31b7688a41a0",
    avatarAlt: 'Professional headshot of African American man with short hair in navy blazer',
    status: 'online'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Course Advisor',
    avatar: "https://images.unsplash.com/photo-1628013663808-25ef6a3b28b4",
    avatarAlt: 'Professional headshot of Hispanic woman with long brown hair in blue shirt',
    status: 'away'
  }];


  const quickActions = [
  { id: 1, text: 'I need help with course access', icon: 'BookOpen' },
  { id: 2, text: 'Technical issue with video playback', icon: 'Play' },
  { id: 3, text: 'Question about my progress', icon: 'TrendingUp' },
  { id: 4, text: 'Billing and payment inquiry', icon: 'CreditCard' }];


  const handleSendMessage = () => {
    if (message?.trim()) {
      const newMessage = {
        id: messages?.length + 1,
        sender: 'user',
        name: 'You',
        message: message,
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);
      setMessage('');

      // Simulate support response
      setTimeout(() => {
        const supportResponse = {
          id: messages?.length + 2,
          sender: 'support',
          name: 'Sarah Chen',
          avatar: "https://images.unsplash.com/photo-1560859389-c4fb2bd88016",
          avatarAlt: 'Professional headshot of Asian woman with shoulder-length black hair in white blouse',
          message: 'Thanks for reaching out! I\'m looking into your question and will have an answer for you shortly.',
          timestamp: new Date()
        };
        setMessages((prev) => [...prev, supportResponse]);
      }, 2000);
    }
  };

  const handleQuickAction = (actionText) => {
    setMessage(actionText);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
          iconName={isOpen ? "X" : "MessageCircle"}
          iconSize={24} />

        {!isOpen &&
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        }
      </div>
      {/* Chat Window */}
      {isOpen &&
      <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 z-40 flex flex-col">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={20} color="white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-semibold">Live Support</h3>
                  <p className="text-xs text-white/80">We typically reply instantly</p>
                </div>
              </div>
              <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              className="text-white hover:bg-white/20 p-1"
              iconName="X"
              iconSize={16} />

            </div>
          </div>

          {/* Online Agents */}
          <div className="p-3 border-b border-gray-100">
            <div className="flex items-center space-x-2 overflow-x-auto">
              {supportAgents?.map((agent) =>
            <div key={agent?.id} className="flex items-center space-x-2 bg-gray-50 rounded-lg p-2 min-w-fit">
                  <div className="relative">
                    <img
                  src={agent?.avatar}
                  alt={agent?.avatarAlt}
                  className="w-6 h-6 rounded-full object-cover" />

                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                agent?.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'}`
                }></div>
                  </div>
                  <div className="text-xs">
                    <p className="font-medium text-academic-navy">{agent?.name}</p>
                    <p className="text-subtle-gray">{agent?.role}</p>
                  </div>
                </div>
            )}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages?.map((msg) =>
          <div key={msg?.id} className={`flex ${msg?.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-2 max-w-[80%] ${msg?.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  {msg?.sender === 'support' &&
              <img
                src={msg?.avatar}
                alt={msg?.avatarAlt}
                className="w-8 h-8 rounded-full object-cover" />

              }
                  <div className={`p-3 rounded-lg ${
              msg?.sender === 'user' ? 'bg-primary text-white' : 'bg-gray-100 text-academic-navy'}`
              }>
                    <p className="text-sm">{msg?.message}</p>
                    <p className={`text-xs mt-1 ${
                msg?.sender === 'user' ? 'text-white/70' : 'text-subtle-gray'}`
                }>
                      {msg?.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
          )}
          </div>

          {/* Quick Actions */}
          {messages?.length === 1 &&
        <div className="p-3 border-t border-gray-100">
              <p className="text-xs text-subtle-gray mb-2">Quick actions:</p>
              <div className="space-y-1">
                {quickActions?.map((action) =>
            <button
              key={action?.id}
              onClick={() => handleQuickAction(action?.text)}
              className="w-full text-left p-2 text-xs text-primary hover:bg-primary/5 rounded-lg academic-transition flex items-center space-x-2">

                    <Icon name={action?.icon} size={14} strokeWidth={2} />
                    <span>{action?.text}</span>
                  </button>
            )}
              </div>
            </div>
        }

          {/* Input */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <Input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e?.target?.value)}
              onKeyPress={(e) => e?.key === 'Enter' && handleSendMessage()}
              className="flex-1" />

              <Button
              onClick={handleSendMessage}
              disabled={!message?.trim()}
              iconName="Send"
              iconSize={16} />

            </div>
          </div>
        </div>
      }
    </>);

};

export default LiveChatWidget;