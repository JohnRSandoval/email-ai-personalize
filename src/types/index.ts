// Common types for the application

export interface User {
  id: string
  email: string
  name?: string
  avatar?: string
  createdAt: string
}

export interface Campaign {
  id: string
  userId: string
  name: string
  subject: string
  content: string
  status: 'draft' | 'scheduled' | 'active' | 'completed' | 'paused'
  scheduledAt?: string
  sentAt?: string
  stats: CampaignStats
  createdAt: string
  updatedAt: string
}

export interface CampaignStats {
  sent: number
  delivered: number
  opened: number
  clicked: number
  bounced: number
  unsubscribed: number
  openRate: number
  clickRate: number
}

export interface Subscriber {
  id: string
  userId: string
  email: string
  firstName?: string
  lastName?: string
  status: 'active' | 'unsubscribed' | 'bounced'
  tags: string[]
  customFields: Record<string, any>
  subscribedAt: string
  unsubscribedAt?: string
}

export interface EmailTemplate {
  id: string
  userId: string
  name: string
  description?: string
  subject: string
  htmlContent: string
  textContent: string
  thumbnail?: string
  category?: string
  createdAt: string
  updatedAt: string
}

export interface Segment {
  id: string
  userId: string
  name: string
  description?: string
  rules: SegmentRule[]
  subscriberCount: number
  createdAt: string
  updatedAt: string
}

export interface SegmentRule {
  field: string
  operator: 'equals' | 'not_equals' | 'contains' | 'not_contains' | 'greater_than' | 'less_than'
  value: any
}

export interface AIPersonalization {
  id: string
  campaignId: string
  subscriberId: string
  personalizedSubject: string
  personalizedContent: string
  personalizationScore: number
  createdAt: string
}