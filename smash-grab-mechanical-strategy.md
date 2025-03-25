# Mechanical Smash and Grab Trading Strategy

## Core Strategy Overview

This is a precision institutional level-based strategy for trading NQ futures (with ES correlation), focusing on key price levels and time-based confluences during specific trading sessions.

## 1. Setup Identification (Pre-Trade)

### Primary Setup Types:
1. **NY 00:00 Level Play**
   - NY 00:00 level must be within 135 ticks of current price
   - Directional bias determined by price position relative to NY 00:00
   - Strongest when combined with session high/low or VWAP

2. **M5 BIAS with SMT**
   - M5 candle shows clear directional bias through wick print
   - SMT (Smart Money Technique) confirmation at session high/low
   - FVG (Fair Value Gap) visible on chart

3. **Premium/SD Level Entry**
   - Price at key Standard Deviation level (-2, -2.5, -4)
   - Often combined with "Premium Zone" identification
   - Multiple SD levels creating zones rather than single lines

4. **Session Transition Setup**
   - London or NY session opening price as key reference
   - First 15-30 minutes of session most powerful
   - Higher probability when aligned with previous session high/low

5. **Breaker Pattern with FVG**
   - Clear breaker structure visible
   - FVG highlighted with rectangular zone
   - Delivery from higher timeframe gap

### Required Level Confluence (minimum 2):
- NY 00:00 level (within 135 ticks)
- M5 BIAS level aligned with trade direction
- Session high/low (AsH, AsL, LoH, LoL)
- VWAP as dynamic support/resistance
- Premium/SD level (-2, -2.5, -4)
- MA50/EMA9 confluence
- H4 pHi/pLo level
- pdEQ (Previous Day Equal) level

## 2. Entry Execution Sequence

### Step-by-Step Entry Process:
1. **Level Identification**
   - Mark all key levels on chart before session
   - Determine which setup type is forming
   - Measure tick distance to potential targets (< 135 ticks ideal)

2. **Direction Confirmation**
   - Check M5 wick bias direction
   - Verify alignment with NY 00:00 position
   - Assess HTF (Higher Timeframe) bias and flow
   - Be willing to reverse expected direction if conflicting signals appear

3. **Precision Timing**
   - Drop to 30s/15s timeframe for CISD identification
   - CISD must be clearly visible and marked on chart
   - Wait for precise intersection of price with CISD level

4. **Trigger Signal**
   - Look for "intent" candle showing momentum (strong body, minimal wick)
   - Multiple intent candles in sequence provide stronger signal
   - Movement through VWAP with intent is particularly powerful

5. **Entry Execution**
   - Enter at precise CISD level break with intent confirmation
   - Position size according to risk parameters (2 micros standard)
   - Document entry price and time immediately

## 3. Risk Management Framework

### Specific Parameters:
- **Position Size**: 
  - Standard: 2 micros/minis for London/NY opens
  - Maximum: 10 micros with $500 hard stop loss
  - Consider: 10-20 micros instead of 1-2 minis for runner strategy

- **Stop Loss Placement**:
  - Method 1: At swing high/low beyond entry
  - Method 2: At retest of FVG wick low/high
  - Method 3: At SMT level for SMT-based entries
  - Stop distance must allow for minimum 1:1 risk:reward

- **Maximum Risk**:
  - $500 maximum risk per trade (combine rule)
  - Calculate exact dollar risk before entry
  - Adjust position size to maintain risk limit

## 4. Exit Strategy Implementation

### Core "Smash and Grab" Approach:
- **Take Profit 1 (TP1)**:
  - First key level (VWAP, session open, DVWAP)
  - Typically 30-50% of position
  - Move stop to breakeven immediately after TP1 hit

- **Take Profit 2 (TP2)**:
  - Second key level (NY 00:00, M5 BIAS)
  - Remaining 50-70% of position
  - Consider: "wick in gap" for precise exit

- **Stop Management**:
  - Move to breakeven after first target reached
  - No re-entries after two breakeven stops in same session
  - End trading for session after multiple BE stops

### Advanced Runner Implementation (Optional):
- **For XFA Account Only**:
  - Hold 1 micro as runner after main position closed
  - Target: "Runner to wick" approach
  - Risk: Only previously secured profits
  - Best used with 10 micros rather than 1-2 minis

## 5. Specific Setup Filters

### Critical Filters:
- **Reject When**:
  - VWAP stands between price and target
  - Setup offers less than 1R potential
  - Two or more key levels contradict trade direction
  - NY 00:00 is beyond 135 ticks from entry
  - Pattern is forming during Asian session range
  - HTF BIAS & Flow contradicts trade direction

- **Prioritize When**:
  - Multiple level confluence exists (3+ levels)
  - Intent candles show clear directional conviction
  - ES correlation confirms NQ movement
  - Second opportunity after passing on first (patience factor)
  - London and NY session openings

## 6. Platform & Chart Setup Requirements

### Essential Setup:
- **Timeframe Hierarchy**:
  - H4/H1: Overall structure and targets
  - M5/M3/M1: Context and bias determination
  - 30s/15s: Precise entry timing

- **Key Visual Elements**:
  - NY 00:00: Yellow/orange horizontal line
  - M5 BIAS: Pink/red horizontal line with price level
  - Session high/lows: White horizontal lines (AsH, AsL, LoH, LoL)
  - VWAP/DVWAP: Blue curved lines
  - CISD levels: Pink/red horizontal lines at structure points
  - FVG: Green rectangular boxes highlighting inefficiency
  - MA50: Pink/red line
  - EMA9: Secondary color line

- **Correlation Monitoring**:
  - ES futures displayed in bottom panel
  - Similar key levels marked on ES chart

## 7. Session-Specific Guidelines

### London Session:
- Focus on NY 00:00 alignment with London open
- Higher emphasis on M5 BIAS confirmation
- Monitor previous Asian session high/low as reference

### New York Session:
- Premium/SD level entries more common
- Higher emphasis on VWAP/MA50 relationships
- Consider reduced risk: "reducing risk for NY in future"

### Special Timeframes:
- 12 noon UTC: Potential hourly turn setups
- First 15-30 minutes of session: Highest probability
- Asian session: Primarily observe, avoid trading unless exceptional setup

## 8. Evolutionary Implementation Path

### Phase 1: Mechanical Rules (Weeks 1-4)
- Strict adherence to all mechanical rules
- No intuition-based decisions
- Detailed documentation of all setups
- Focus on pattern recognition without flexible interpretation

### Phase 2: Intuition Integration (Weeks 5-8)
- Begin accepting "sort of" patterns
- Apply 90% probability mindset
- Look for "intent" beyond just pattern completion
- Maintain mechanical risk parameters

### Phase 3: Advanced Implementation (Weeks 9+)
- Strategic runner implementation
- Pattern recognition at higher level
- Deeper understanding of "market flow"
- Refined instrument selection (MNQ vs NQ)

## Implementation Checklist:

### Before Session:
```
[ ] Mark all key levels on chart
[ ] Identify potential setups for session
[ ] Calculate tick distance to NY 00:00
[ ] Check ES correlation
[ ] Review previous session high/lows
[ ] Set maximum risk parameters for day
```

### During Setup:
```
[ ] Identify setup type forming
[ ] Check for minimum 2 level confluence
[ ] Drop to lower timeframe for CISD identification
[ ] Assess risk-reward ratio (minimum 1:1)
[ ] Check all filters for potential rejection
```

### At Entry:
```
[ ] Confirm intent candle at CISD level
[ ] Place exact entry at CISD break
[ ] Set precise stop loss placement
[ ] Calculate exact dollar risk
[ ] Document entry with timestamp
```

### Post-Entry:
```
[ ] Monitor for TP1 target approach
[ ] Move stop to breakeven after TP1
[ ] Document trade management decisions
[ ] End session after 2 BE stops
[ ] Record complete trade details
```

## Trading Journal Template

### Trade Setup Details:
```
Date:
Session:
Setup Type:
Entry Time:
Key Levels Present:
- NY 00:00: 
- M5 BIAS:
- Session High/Low:
- VWAP:
- Other:

Confluence Factors (min 2):
1.
2.
3.

CISD Timeframe Used:
Intent Candle Observed:
ES Correlation Confirmation:
```

### Trade Execution Details:
```
Entry Price:
Stop Loss Price:
Stop Loss Type:
Dollar Risk: $
Position Size:
Target 1:
Target 2:
Risk:Reward Ratio:
```

### Trade Results:
```
Target 1 Hit: Y/N
Stop to Breakeven: Y/N
Target 2 Hit: Y/N
Final P&L: $
R Multiple Achieved:
```

### Post-Trade Analysis:
```
What Worked Well:
What Could Be Improved:
Pattern Recognition Notes:
Key Lessons:
Follow-Up Actions:
```
