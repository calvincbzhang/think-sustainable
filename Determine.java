
import java.util.*;

public class Determine {
  public static void main (String[] args){

    Dictionary<String, Double> info = new Hashtable<String, Double>();
    // Inserting values into the Dictionary
    info.put("Age", 22.0);
    info.put("Happiness", 0.2);
    info.put("Surprise", 0.5);
    info.put("Neutral", 0.6);
    info.put("Disgust", 0.73);
    info.put("Sadness", 0.12);
    info.put("Anger", 0.32);
    info.put("Contempt", 0.43);
    info.put("Fear", 0.54);

    int mood = calculateMoodScore(info);
    System.out.println(mood);
  } // main

  public static int calculateMoodScore(Dictionary<String, Double> info){
    int moodScore = 0;
    double totalHappy = info.get("Happiness") + info.get("Surprise");
    double totalSad = info.get("Disgust") + info.get("Sadness")+ info.get("Anger")
                      + info.get("Contempt") + info.get("Fear");
    double avgHappy = totalHappy / 2;
    double avgNeutral = info.get("Neutral");
    double avgSad = totalSad / 5;
    System.out.println(avgHappy);
    System.out.println(avgNeutral);
    System.out.println(avgSad);

    if(avgHappy > avgNeutral && avgHappy > avgSad)
        {
            moodScore++;
        }
        else if(avgNeutral < avgSad)
        {
            moodScore--;
        }
    return moodScore;
  } // calculateHappy

} // Determine
