'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Cpu, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const codeExamples = {
  python: `# Crypto Portfolio Tracker
import requests
import pandas as pd
from datetime import datetime

class CryptoTracker:
    def __init__(self):
        self.api_url = "https://api.coingecko.com/api/v3"
        self.portfolio = {}
    
    def add_holding(self, symbol, amount, purchase_price):
        """Add cryptocurrency holding to portfolio"""
        self.portfolio[symbol] = {
            'amount': amount,
            'purchase_price': purchase_price,
            'date_added': datetime.now()
        }
    
    def get_current_prices(self):
        """Fetch current cryptocurrency prices"""
        coins = ','.join(self.portfolio.keys())
        response = requests.get(
            f"{self.api_url}/simple/price",
            params={'ids': coins, 'vs_currencies': 'usd'}
        )
        return response.json()
    
    def calculate_portfolio_value(self):
        """Calculate total portfolio value and P&L"""
        current_prices = self.get_current_prices()
        total_value = 0
        total_invested = 0
        
        for symbol, holding in self.portfolio.items():
            current_price = current_prices[symbol]['usd']
            value = holding['amount'] * current_price
            invested = holding['amount'] * holding['purchase_price']
            
            total_value += value
            total_invested += invested
        
        return {
            'total_value': total_value,
            'total_invested': total_invested,
            'profit_loss': total_value - total_invested,
            'percentage_change': ((total_value - total_invested) / total_invested) * 100
        }`,

  web3: `// Aave DeFi Protocol Integration
import { ethers } from 'ethers';
import { LendingPool } from '@aave/protocol-v2';

class AaveDashboard {
    constructor(providerUrl, privateKey) {
        this.provider = new ethers.providers.JsonRpcProvider(providerUrl);
        this.wallet = new ethers.Wallet(privateKey, this.provider);
        this.lendingPoolAddress = '0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9';
    }

    async getUserAccountData(userAddress) {
        const lendingPool = new ethers.Contract(
            this.lendingPoolAddress,
            LendingPool.abi,
            this.provider
        );

        try {
            const accountData = await lendingPool.getUserAccountData(userAddress);
            
            return {
                totalCollateralETH: ethers.utils.formatEther(accountData.totalCollateralETH),
                totalDebtETH: ethers.utils.formatEther(accountData.totalDebtETH),
                availableBorrowsETH: ethers.utils.formatEther(accountData.availableBorrowsETH),
                currentLiquidationThreshold: accountData.currentLiquidationThreshold.toString(),
                ltv: accountData.ltv.toString(),
                healthFactor: ethers.utils.formatEther(accountData.healthFactor)
            };
        } catch (error) {
            console.error('Error fetching account data:', error);
            throw error;
        }
    }

    async depositAsset(asset, amount) {
        const lendingPool = new ethers.Contract(
            this.lendingPoolAddress,
            LendingPool.abi,
            this.wallet
        );

        const tx = await lendingPool.deposit(
            asset,
            ethers.utils.parseEther(amount.toString()),
            this.wallet.address,
            0
        );

        return await tx.wait();
    }
}`,

  automation: `# Process Automation & File Management
import os
import shutil
import pandas as pd
from pathlib import Path
from datetime import datetime, timedelta
import logging

class FileProcessingAutomation:
    def __init__(self, base_path):
        self.base_path = Path(base_path)
        self.processed_path = self.base_path / "processed"
        self.error_path = self.base_path / "errors"
        self.setup_directories()
        self.setup_logging()
    
    def setup_directories(self):
        """Create necessary directories if they don't exist"""
        self.processed_path.mkdir(exist_ok=True)
        self.error_path.mkdir(exist_ok=True)
    
    def setup_logging(self):
        """Configure logging for automation tracking"""
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s - %(message)s',
            handlers=[
                logging.FileHandler('automation.log'),
                logging.StreamHandler()
            ]
        )
        self.logger = logging.getLogger(__name__)
    
    def process_csv_files(self):
        """Automated processing of CSV files"""
        csv_files = list(self.base_path.glob("*.csv"))
        processed_count = 0
        
        for csv_file in csv_files:
            try:
                # Read and validate CSV
                df = pd.read_csv(csv_file)
                
                # Data validation and cleaning
                df_cleaned = self.clean_data(df)
                
                # Generate summary report
                summary = {
                    'filename': csv_file.name,
                    'rows_processed': len(df_cleaned),
                    'processing_date': datetime.now().isoformat(),
                    'data_quality_score': self.calculate_quality_score(df_cleaned)
                }
                
                # Save processed file
                output_path = self.processed_path / f"processed_{csv_file.name}"
                df_cleaned.to_csv(output_path, index=False)
                
                # Move original to processed folder
                shutil.move(str(csv_file), str(self.processed_path / csv_file.name))
                
                self.logger.info(f"Successfully processed {csv_file.name}")
                processed_count += 1
                
            except Exception as e:
                self.logger.error(f"Error processing {csv_file.name}: {str(e)}")
                shutil.move(str(csv_file), str(self.error_path / csv_file.name))
        
        return processed_count
    
    def clean_data(self, df):
        """Data cleaning and validation logic"""
        # Remove duplicates
        df_cleaned = df.drop_duplicates()
        
        # Handle missing values
        df_cleaned = df_cleaned.fillna(method='ffill')
        
        # Data type conversions
        for col in df_cleaned.columns:
            if 'date' in col.lower():
                df_cleaned[col] = pd.to_datetime(df_cleaned[col], errors='coerce')
        
        return df_cleaned`
}

const aboutPoints = [
  {
    icon: Code2,
    title: "Self-Taught Developer",
    description: "Transitioned from operations to development through intensive self-study via Codecademy and hands-on project building."
  },
  {
    icon: Database,
    title: "Data-Driven Approach",
    description: "Strong background in data analysis and SQL, bringing analytical thinking to every development challenge."
  },
  {
    icon: Cpu,
    title: "Automation Specialist",
    description: "Expert in creating Python scripts and tools that optimize processes and eliminate manual workflows."
  },
  {
    icon: TrendingUp,
    title: "Web3 Enthusiast",
    description: "Passionate about blockchain technology and DeFi protocols, building tools for the decentralized future."
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            ./about-paola
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A technical professional who transforms operational challenges into elegant code solutions. 
            Specializing in Python automation, Web3 development, and data-driven process optimization.
          </p>
        </motion.div>

        {/* About Points Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {aboutPoints.map((point, index) => (
            <Card key={index} className="glow-border group hover:border-primary/40 transition-all duration-300">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <point.icon className="w-8 h-8 text-primary mr-3 group-hover:animate-pulse" />
                <CardTitle className="text-xl">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {point.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Code Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-primary">&gt;_</span> Code Examples
          </h3>
          
          <Tabs defaultValue="python" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-card border border-border">
              <TabsTrigger value="python" className="font-mono">Python</TabsTrigger>
              <TabsTrigger value="web3" className="font-mono">Web3</TabsTrigger>
              <TabsTrigger value="automation" className="font-mono">Automation</TabsTrigger>
            </TabsList>
            
            {Object.entries(codeExamples).map(([key, code]) => (
              <TabsContent key={key} value={key} className="mt-6">
                <Card className="overflow-hidden">
                  <div className="terminal-header">
                    <div className="flex items-center space-x-2">
                      <div className="terminal-dot bg-red-500"></div>
                      <div className="terminal-dot bg-yellow-500"></div>
                      <div className="terminal-dot bg-green-500"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-terminal-text text-sm font-mono">
                        {key === 'python' && 'crypto_tracker.py'}
                        {key === 'web3' && 'aave_dashboard.js'}
                        {key === 'automation' && 'file_processor.py'}
                      </span>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <SyntaxHighlighter
                      language={key === 'web3' ? 'javascript' : 'python'}
                      style={oneDark}
                      customStyle={{
                        margin: 0,
                        padding: '1.5rem',
                        background: 'transparent',
                        fontSize: '0.875rem',
                      }}
                      showLineNumbers
                    >
                      {code}
                    </SyntaxHighlighter>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto glow-border">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Learning Journey</CardTitle>
            </CardHeader>
            <CardContent className="text-left">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">From Operations to Code</h4>
                  <p className="text-muted-foreground mb-4">
                    Started in operations and process design, identifying inefficiencies that could be solved through automation. 
                    This operational background gives me unique insight into real-world problems that technology can solve.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Continuous Learning</h4>
                  <p className="text-muted-foreground">
                    Self-taught through Codecademy, interactive platforms, and hands-on projects. 
                    I believe in learning by building - every skill is reinforced through practical application and real-world projects.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}